

import 'antd/dist/antd.css';
import { Header } from 'antd/lib/layout/layout';
import { Route, Routes } from 'react-router-dom';
import { AdminLayout } from './components/layouts/AdminLayout';
import WebsiteLayout from './components/layouts/WebsiteLayout/WebsiteLayout';
import MenuHeader from './components/Menu/Menu';
import PrivateRouter from './components/privateRouter/PrivateRouter';
import AddCategoryPage from './pages/admin/category/add';
import AddProductPage from './pages/admin/product/add';
import EditProductPage from './pages/admin/product/edit';
import ListProduct from './pages/admin/product/list';
import CartList from './pages/website/cart/CartList';
import HomePage from './pages/website/home/home';
import ProductDetails from './pages/website/product/ProductDetails';
import Signin from './pages/website/Signin/SigninPage';
import SignUP from './pages/website/Signup/SignupPage';


const App = () => {


  return (
    <div className="App">
      <Routes>

        <Route path='admin' element={
          <PrivateRouter>
            <AdminLayout />
          </PrivateRouter>
        }>

          <Route path='product'>
            <Route index element={<ListProduct />}></Route>
            <Route path='add' element={<AddProductPage />}></Route>
            <Route path=':id/edit' element={<EditProductPage />}></Route>

          </Route>
          <Route path='category'>
            {/* <Route index element={<ListProduct />}></Route> */}
            <Route path='add' element={<AddCategoryPage />}></Route>
            {/* <Route path=':id/edit' element={<EditProductPage />}></Route> */}

          </Route>





        </Route>
        <Route path='' element={<WebsiteLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="product/:id" element={<ProductDetails />} />






        </Route>
        <Route path='cart' element={<WebsiteLayout />}>
          <Route index element={<CartList />}></Route>


        </Route>
        <Route path='signin' element={<Signin />}>
          <Route index element={<Signin />}></Route>


        </Route>
        <Route path='signup' element={<SignUP />}>
          <Route index element={<SignUP />}></Route>


        </Route>

      </Routes>



    </div>
  )
}

export default App
