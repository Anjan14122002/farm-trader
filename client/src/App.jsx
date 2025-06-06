/* eslint-disable react-hooks/exhaustive-deps */
import  { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Login from './pages/Login';
import Layout from './component/Layout';
import ProductDetails from './pages/ProductDetails';
import Dashboard from './pages/Dashboard';
import SellProduct from './pages/SellProduct';
import axios from 'axios';
import { Context, BASE_URL} from './main'

function App() {
  const { setUser, setIsAuthenticated, setLoading } = useContext(Context)
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/authenticate`, { withCredentials: true })
      .then((res) => {
        console.log("User Id is",res.data.userId);
        setUser(res.data.userId);
        setIsAuthenticated(true)
        setLoading(false);
      })
      .catch((error) => {
        setUser({})
        setIsAuthenticated(false);
        setLoading(false);
        console.log(error)
      })
  
  }, [])

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/search" element={<Search />} />
          <Route path="/sell" element={<SellProduct />} />
          <Route path="/product_details" element={<ProductDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
