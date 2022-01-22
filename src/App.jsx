import React, { useState ,useEffect, lazy, Suspense} from 'react'
import { Navbar, Checkout, Footer } from "./components"
import {commerce} from "./lib/ecommerce";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "./App.css"
import Loading from './components/Loading';
import Pending from './components/Pending';
const Products = lazy(() => import('./components/products/Products'))
const Home = lazy(() => import('./components/Home/Home'))
const Cart = lazy(() => import('./components/cart/Cart'))


function App() {
    const [products, setProducts] = useState([])
    // const [category, setCategory] = useState([])
    const [cart, setCart] = useState({})
    const [order, setOrder] = useState({})
    const [errorMsg, setErrorMsg] = useState("")


        // to call all products from the ecommerce API
    const fetchProducts = async ()=> {
        const {data} = await commerce.products.list()
        setProducts(data);
    }
    // to list and show all categories from the e-commerce API
    // const fetchCategory = async ()=> {
    //     const {data} = await commerce.categories.list()
    //     setCategory(data);
    // }
        // to retrieve the carted items together
    const fetchCart = async ()=> {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) => {
        const {cart} = await commerce.cart.add(productId, quantity)
        setCart(cart);
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const {cart} = await commerce.cart.update(productId, {quantity})
        setCart(cart)
    }

    const handleRemoveFromCart = async (productId, quantity) => {
        const {cart} = await commerce.cart.remove(productId, {quantity})
        setCart(cart)
    }

    const handleEmptyCart = async () =>{
        const {cart} = await commerce.cart.empty();
        setCart(cart)
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        setCart(newCart);
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
            setOrder(incomingOrder);
            refreshCart();

        }catch(error) {
            setErrorMsg(error.data.error.message)
        }
    }

//    to load up the products and carts before loading the items
    useEffect(() =>{
        try{
            fetchCart();
            fetchProducts();
        }catch(err){
            return <Pending error='Reload the page' />
        }
        
    }, [])
    
    return (
        <Router>
            <>                
            <Suspense fallback={<Loading />}>
                <Navbar totalItems={cart.total_items} cart={cart} /> 
                <Routes>
                   
                        <Route exact path='/' element={<Home />} />
                        <Route path="/products" element={<Products cart={cart} products={products} onAddToCart={handleAddToCart} />} />
                    
                    <Route path="/cart"  element={<Cart 
                        cart={cart}
                        handleRemoveFromCart={handleRemoveFromCart} 
                        handleUpdateCartQty={handleUpdateCartQty}
                        handleEmptyCart={handleEmptyCart}
                        />} />
                    <Route path="/checkout"
                        element={<Checkout 
                        cart={cart} 
                            order={order}
                            onCaptureCheckout={handleCaptureCheckout}
                            error={errorMsg}
                        />}
                    />
                    
                </Routes>
               
                <Footer /> 
            </Suspense>
            </>
        </Router>
    )
}

export default App
