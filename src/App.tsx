

import 'antd/dist/antd.css';
import { Header } from 'antd/lib/layout/layout';
import { Route, Routes } from 'react-router-dom';
import { AdminLayout } from './components/layouts/AdminLayout';
import WebsiteLayout from './components/layouts/WebsiteLayout/WebsiteLayout';
import MenuHeader from './components/Menu/Menu';
import AddProductPage from './pages/admin/product/add';
import EditProductPage from './pages/admin/product/edit';
import ListProduct from './pages/admin/product/list';


const App = () => {


  return (
    <div className="App">
      <Routes>

        <Route path='admin' element={<AdminLayout />}>
      
          <Route path='product'>
            <Route index element={<ListProduct/>}></Route>
            <Route path='add' element={<AddProductPage/>}></Route>
            <Route path=':id/edit' element={<EditProductPage/>}></Route>

          </Route>
        
        
          

        </Route>
        {/* <Route path='' element={<WebsiteLayout/>}> */}

        {/* </Route> */}

      </Routes>



    </div>
  )
}

export default App
