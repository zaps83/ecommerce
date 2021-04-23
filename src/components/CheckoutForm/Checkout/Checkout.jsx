import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'
import useStyles from './styles'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import { commerce } from '../../../lib/commerce'
import { Link, useHistory } from 'react-router-dom'

const steps = ['Shipping address', 'Payment details']

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
    const classes = useStyles()
    const [activeStep, setActiveStep] = useState(0)
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [shippingData, setShippingData] = useState({})
    const [shippingPrice, setShippingPrice] = useState({})
    const history = useHistory();

    useEffect(() => {
        if (cart.id) {
          const generateToken = async () => {
            try {
              const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
    
              setCheckoutToken(token);
            } catch {
              if (activeStep !== steps.length) history.push('/');
            }
          };
    
          generateToken();
        }
      }, [cart]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)


    const next = (data, options) => {
        setShippingPrice(options)
        setShippingData(data)
        nextStep()
    }

    let Confirmation = () => order.customer ? (
        <>
            <div>
                <Typography varinat='h5'>Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}</Typography>
                <Divider className={classes.divider} />
                <Typography cariant='subtitle2'>Order ref : {order.customer_reference}</Typography>
            </div>
            <br />
            <Button component={Link} to='/' variant='outlined' type='button'>Back to Home</Button>
        </>
    ) : (
        <>
            <div className={classes.spinner}>
                <CircularProgress />
            </div>
            <Button component={Link} to='/' variant='outlined' type='button'>Back to Home</Button>
        </>
    )
    
    if (error) {
        <>
            <Typography variant='h5'>Error: {error}</Typography>
        </>
    }

    const Form = () => activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken} next={next} setShippingPrice={setShippingPrice} />
        : <PaymentForm 
            shippingData={shippingData} 
            checkoutToken={checkoutToken} 
            backStep={backStep} 
            nextStep={nextStep}
            onCaptureCheckout={onCaptureCheckout}
            shippingPrice={shippingPrice}
        />

    return (
        checkoutToken ? (
        <>
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant='h4' align='center'>Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
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
        ) : (
            <>
                <div className={classes.toolbar} />
                <div className={classes.spinner}>
                    <CircularProgress />
                </div>
            </>
        )
    )
}

export default Checkout
