import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Inventory from './Components/Inventory/Inventory';
import Layout from './Components/Layout/Layout';
import Login from './Components/Login/Login';
import OrderReview from './Components/OrderReview/OrderReview';
import Orders from './Components/Orders/Orders';
import Product from './Components/Product/Product';




function App() {
  const router=createBrowserRouter([
    {path :'/', element: <Layout></Layout>, children:[
      {path:'/', element: <Product></Product>},
      {path:'/Product', element: <Product></Product>},
      {path:'/Order', element: <Orders></Orders>},
      {path: '/OrderReview', element: <OrderReview></OrderReview>},
      {path: '/Inventory', element: <Inventory></Inventory> },
      {path: '/Login', element: <Login></Login> },
    ]},
  ])
  return (
    <div>
      <RouterProvider
      router={router}
      ></RouterProvider>
    </div>
  );
}

export default App;
