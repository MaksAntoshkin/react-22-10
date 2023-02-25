import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'

type Props = {}

type ProductsInCartType = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setRpoductsInCart] = useState<ProductsInCartType>({
        1: 5,
        2: 5,
        3: 1,
    })

    const addProductToCart = (count: number, price: number) => {}

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            {/* <button onClick={() => addProductToCart(5, 500)}>
                Add to Cart
            </button> */}
            <Main addProductToCart={addProductToCart} />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
