import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Shop from './components/Shop.jsx'
import Cart from './components/Cart.jsx'
import { CartProvider } from './CartContext.jsx'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <ErrorPage />,
        },
        {
            path: 'shop',
            element: <Shop />
        },
        {
            path: 'cart',
            element: <Cart/>
        }
    ])

    return (
        <CartProvider>
            <RouterProvider router={router}/>
        </CartProvider>
    )
}

export default Router;