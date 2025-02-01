import { Routes, Route } from 'react-router-dom';
import ListeCard from './ListeCards';
import NotFound from './NotFound';
import HeaderN from './Navbar';
import SignUp from './SignUp';
import SellerInfo from './SellerInfo';
import ItemInformation from './ItemInformation';
import AddAds from './AddAds';
import Picture from './Picture';
import MyAdds from './MyAdds';
import ProtectedRoute from './ProtectedRoute';  // Import the ProtectedRoute
import { AuthProvider } from './AuthContext';
import DashboardFinance from './DashboardFinance/DashboardFinance';
import Login from './Login';
import DashboardContextProvider from './context/DashboardContext';  // Ensure the path is correct
import Footer from './Footer';
import Managea from './Managea';
import ManageValidation from './ManageValidation';
import ManageUsers from './ManageUsers';
import MyActiveAds from './MyActiveAds';
//import Categories from './Categories';
//import Page from './Page';
//<Page />


function App() {
  return (
    <AuthProvider>
      <DashboardContextProvider>  {/* Wrap your app or specific part of your app */}
        <div>
          <HeaderN />
          
<<<<<<< HEAD
          <Categories />
=======
         
>>>>>>> 7433595142aa4dac8bd0750e856c5551ae838705

       

          <Routes>
          <Route path="*" element={<NotFound />} />
            <Route path="/" element={<ListeCard />} />
            <Route path="/DashboardFinance" element={<DashboardFinance />} />
            <Route path="/managea" element={<Managea />} />
            <Route path="/managevalidation" element={<ManageValidation />} />
            <Route path="/manageUsers" element={<ManageUsers />} />
            <Route path="/myActiveAds" element={<MyActiveAds />} />


            



            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
           
            <Route path="/iteminformation" element={<ItemInformation />} />
            <Route path="/addads" element={ 
              <ProtectedRoute>
                <AddAds />
              </ProtectedRoute>
            } />
            <Route path="/picture" element={<Picture />} />
            <Route path='/seller-info' element={<SellerInfo />} />
            <Route path='/Myadds' element={<MyAdds />} />
            
          </Routes>
          <br /><br />
          <Footer />
        </div>
      </DashboardContextProvider>
    </AuthProvider>
  );
}

export default App;