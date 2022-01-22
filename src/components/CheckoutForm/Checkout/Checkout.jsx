import React, {useState, useEffect} from 'react'
import {Link, Navigate} from "react-router-dom";
import {Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline} from "@material-ui/core"

import useStyles from "./styles"
import PaymentForm from "../PaymentForm"
import AddressForm from "../AddressForm"

import { commerce } from '../../../lib/ecommerce'

const steps = ["shipping address", "payment Details"]



const Checkout = ({cart, errorMsg, onCaptureCheckout, order}) => {
    const classes = useStyles();

    const [checkoutToken, setCheckoutToken]= useState(null)
    const [activeStep, setActiveStep] = useState(0)
    const [shippingData, setShippingData] = useState({})
    const [isDone, setIsDone ] = useState(false)

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

    useEffect(() => {
        const genToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, {type: "cart"})
                setCheckoutToken(token)
            } catch(err) {
                <Navigate to="/" />
            }
        }

        genToken();
    },[cart])


    const next = (data)  => {
        setShippingData(data)

        nextStep();
    }

    const timeout = () => {setTimeout(() => {
        setIsDone(true)
    }, 3000)};

    let Confirmation = () => (order.customer ? (
        <>
          <div>
            <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
            <Divider className={classes.divider} />
            <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
          </div>
          <br />
          <Button style={{background: "red", color: "white"}} component={Link} variant="outlined" type="button" to="/">Back to home</Button>
        </>
      ) : isDone ? (
      <>
        <div>
          <Typography variant="h5">Thank you for your purchase!</Typography>
          <Divider className={classes.divider} />
        </div>
        <br />
        <Button style={{background: "red", color: "white"}} component={Link} variant="outlined" type="button" to="/">Back to home</Button>
      </>) : ((
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      )));
    
    if (errorMsg) {
    Confirmation = () => (
        <>
        <Typography variant="h5">Error: {errorMsg}</Typography>
        <br />
        <Button style={{background: "red", color: "white"}} component={Link} variant="outlined" type="button" to="/">Back to home</Button>
        </>
    );
    }

    const Form = () =>
        activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} next={next} /> : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} nextStep={nextStep} onCaptureCheckout={onCaptureCheckout} timeout={timeout} />
    

    return (
        <>
        <CssBaseline />
           <div className={classes.toolbar}/>
           <main className={classes.layout}>
               <Paper className={classes.paper}>
                   <Typography variant="h5" align="center">Checkout</Typography>
                   <Stepper activeStep={0} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                   </Stepper>
                   {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
               </Paper>
           </main> 
        </>
    )
}

export default Checkout
 