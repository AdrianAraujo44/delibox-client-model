import Cart from "../view/Cart";
import Home from "../view/Home";
import NewOrder from "../view/NewOrder";
import Order from "../view/Order";
import ProductDetail from "../view/ProductDetail";

const routes = [
  {
    path: '/',
    element: <Home/>
  },
  {
    path:'/product/:productId',
    element: <ProductDetail />
  },
  {
    path: '/carrinho',
    element: <Cart /> 
  },
  {
    path: '/novo-pedido',
    element: <NewOrder />
  },
  {
    path: '/pedido/:code',
    element: <Order /> 
  }
]

export default routes