import React, { useContext, useEffect } from 'react';
import { BrowserRouter,Router , Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import MainPage from './mainPage';
import MenuPage from './MenuPage';
import PizzaPage from './PizzaPage';
import PizzaDetailPage from './PizzaDetailPage';
import OrderPage from './OrderPage';
import ShakeDetailPage from './ShakeDetailPage';
import ShakesPage from './ShakesPage';
import OrderShakePage from './OrderShakePage';
import CoffeePage from './CoffeePage';
import CoffeeItemPage from './coffeeItems';
import OrderCoffeePage from './OrderCoffeePage';
import BurgerPage from './BurgerPage';
import BurgerItemPage from './BurgerItemPage';
import OrderBurgerPage from './OrderBurgerPage';
import OrderMomoPage from './OrderMomoPage';
import MomoPage from './MomoPage';
import MomoDetailPage from './MomoDetailPage';
import ThankYouPage from './ThankYouPage';
import FriesDetailPage from './FriesDetailPage';
import FriesPage from './FriesPage';
import OrderFriesPage from './OrderFriesPage';
import PastaPage from './PastaPage';
import PastaDetailPage from './PastaDetailPage';
import OrderPastaPage from './OrderPastaPage';
import SmoothiesPage from './SmoothiesPage';
import SmoothieDetailPage from './SmoothiesDetailPage';
import OrderSmoothiePage from './OrderSmoothiePage';
import FeedbackPage from './FeedbackPage';
import ContactPage from './ContactPage';
import RegisterForm from './register';
import LoginForm from './Login';
import MyOrders from './MyOrders';
import { UserContext } from './UserContext';
import axios from 'axios';
import AdminDashboard from './AdminDashboard';


const App = () => {
  let {user,makeUser} =useContext(UserContext)

  useEffect(()=>{
   let token = localStorage.getItem("token")
   let header ={
 Authorization:"Bearer "+token
 }
 
 axios.get("http://localhost:5000/user/verify",{headers:header})
 .then((res)=>{
  makeUser(res.data.data)
 })
 .catch((err)=>console.log(err))
  },[])
  return (
    
      <Routes>
      <Route path="/" element={<MainPage></MainPage>}/> 
      <Route path='/register' element={<RegisterForm></RegisterForm>}></Route>
      <Route path="/admin-dashboard" element={<AdminDashboard/>} />
      <Route path="/myorders" element={<MyOrders/>} />
          <Route path='/login' element={<LoginForm/>}></Route>
      <Route path="/home" element={<HomePage></HomePage>}/> 
       <Route path="/menu" element={<MenuPage></MenuPage>}/> 
      <Route path="/pizza" element={<PizzaPage />} />
      <Route path="/pizza/:pizzaId" element={<PizzaDetailPage />} />
      <Route path="/order" element={<OrderPage/>} />
      <Route path="/shake" element={<ShakesPage />} /> 
      <Route path="/shake/:shakeId" element={<ShakeDetailPage />} />  
      <Route path="/ordershake" element={<OrderShakePage/>} />
      <Route path="/coffee" element={<CoffeePage/>} />
      <Route path="/coffee/:coffeeId" element={<CoffeeItemPage />} />
      <Route path="/ordercoffee" element={<OrderCoffeePage/>} />
      <Route path="/burger" element={<BurgerPage/>} />
      <Route path="/burger/:burgerId" element={<BurgerItemPage/>} />
      <Route path="/orderburger" element={<OrderBurgerPage/>} />
      <Route path="/momos" element={<MomoPage/>} />
        <Route path="/momo/:momoId" element={<MomoDetailPage />} />
        <Route path="/order-momo" element={<OrderMomoPage />} />
        <Route path="/fries" element={<FriesPage />} />
        <Route path="/fries/:friesId" element={<FriesDetailPage />} />
        <Route path="/order-fries" element={<OrderFriesPage />} />
        <Route path="/pasta" element={<PastaPage />} />
        <Route path="/pasta/:pastaId" element={<PastaDetailPage />} />
        <Route path="/order-pasta" element={<OrderPastaPage />} />
        <Route path="/smoothies" element={<SmoothiesPage />} />
        <Route path="/smoothie/:smoothieId" element={<SmoothieDetailPage />} />
        <Route path="/order-smoothie" element={<OrderSmoothiePage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/feedback" element={<FeedbackPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
     </Routes>
    
    
  );
};

export default App;
