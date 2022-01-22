import React , { useState, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { commerce } from '../../lib/ecommerce';

import FormInput from './CustomTextField';
import useStyles from "./Checkout/styles";
const AddressForm = ({checkoutToken, next}) => {
    const classes = useStyles();

    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState("");
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState("");
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState("");
    
    const countries = Object.entries(shippingCountries).map(([code, name]) => ({id: code, label: name}));
    const subDivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({id: code, label: name}));
    const options = shippingOptions.map((option) =>({id: option.id, label: `${option.description} - (${option.price.formatted_with_symbol})`}))
    const methods = useForm();

    const fetchShippingCountries = async (tokenID) => {
        const { countries } = await commerce.services.localeListShippingCountries(tokenID)
        console.log(countries);
        setShippingCountries(countries)
        setShippingCountry(Object.keys(countries)[0])
    }

    const fetchShippingSubdivisions = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode)
        console.log(subdivisions);
        setShippingSubdivisions(subdivisions)
        setShippingSubdivision(Object.keys(subdivisions)[0])
    }

    const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
        const options  = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region})

        setShippingOptions(options)
        setShippingOption(Object.keys(options)[0])
    }

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id)
    },[checkoutToken.id])

    useEffect(() => {
        if(shippingCountry) fetchShippingSubdivisions(shippingCountry)
        
    },[shippingCountry])

    useEffect(() => {
        if(shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision)
        
        },[checkoutToken.id, shippingCountry, shippingSubdivision])

    return (
        <>
           <Typography variant="h6" gutterBottom>Shipping Addresses</Typography>
           <FormProvider {...methods} >
               <form onSubmit={methods.handleSubmit((data) => (next({ ...data, shippingCountry, shippingSubdivision, shippingOption})))}>
                    <Grid container spacing={3}>
                        <FormInput required name="firstName" label="First Name" />
                        <FormInput required name="lastName" label="Last Name" />
                        <FormInput required name="address" label="Address" />
                        <FormInput required name="email" label="Email" />
                        <FormInput required name="city" label="City" />
                        <FormInput required name="zip" label="Zip Code" />
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select fullWidth onChange={(e)=> setShippingCountry(e.target.value)} value={shippingCountry}>
                                {countries.map((country) => (
                                    <MenuItem key={country.id} value={country.id}>{country.label}</MenuItem>
                                ))}
                                
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivisions</InputLabel>
                            <Select fullWidth onChange={(e)=> setShippingSubdivision(e.target.value)} value={shippingSubdivision}>
                                {subDivisions.map((subdivision) => (
                                    <MenuItem key={subdivision.id} value={subdivision.id}>{subdivision.label}</MenuItem>
                                ))}
                                
                            </Select>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select fullWidth onChange={(e)=> setShippingOption(e.target.value)} value={shippingOption}>
                                {options.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>{option.label}</MenuItem>
                                ))}
                                
                            </Select>
                        </Grid>

                    </Grid>
                   <div className={classes.toolbar}/>

                    <Grid style={{display: 'flex', justifyContent: "space-between"}}>
                        <Button component={Link} to="/cart" variant="outlined" style={{background: "black", color: "white"}}>Back to Cart</Button>
                        <Button type="submit" variant="contained" color="primary">Proceed</Button>

                    </Grid>
               </form>
           </FormProvider>
        </>
    )
}

export default AddressForm
