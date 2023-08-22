import { createBrowserRouter, Route, Routes } from 'react-router-dom';

// Farmer UI
import ReportDisease from '../containers/farmer/ReportDisease.jsx';
import UseMachine from '../containers/farmer/UseMachine.jsx';
import FarmerHome from '../containers/farmer/FarmerHome.jsx';
import Irrigation from '../containers/farmer/Irrigation.jsx';
import UseChemical from '../containers/farmer/UseChemical.jsx';
import Harvest from "../containers/farmer/Harvest.jsx";
import Storage from "../containers/farmer/Storage.jsx";

// Owner UI
import OwnerHome from '../containers/owner/OwnerHome.jsx';
import AddFarmer from '../containers/owner/FarmerDetails.jsx';
import AddFarmland from '../containers/owner/AddFarmland.jsx';

// Home
import NewHome from "../containers/Home.jsx";
import FarmerLayout from "../containers/FarmerLayout.jsx";
import OwnerLayout from "../containers/OwnerLayout.jsx";

// Login & SignUp pages
import SignupFarmer from "../containers/login/SignupFarmer.jsx";
import SignupOwner from "../containers/login/SignupOwner.jsx";

const AppRoutes = () => {
    return <Routes>
        <Route path='/' element={<NewHome />} />
        <Route path='/signupfarmer' element={<SignupFarmer/>}/>
        <Route path='/signupowner' element={<SignupOwner/>}/>

        <Route path={"/"} element={<FarmerLayout/>}>
            <Route path='/farmerhome' element={<FarmerHome />} />
            <Route path='/reportdisease' element={<ReportDisease />} />
            <Route path='/usechemical' element={<UseChemical />} />
            <Route path='/usemachine' element={<UseMachine />} />
            <Route path='/irrigation' element={<Irrigation />} />
            <Route path='/harvest' element={<Harvest />} />
            <Route path='/storage' element={<Storage />} />
        </Route>

        <Route path={"/"} element={<OwnerLayout/>}>
            <Route path='/ownerhome' element={<OwnerHome />} />
            <Route path='/addfarmer' element={<AddFarmer />} />
            <Route path='/addfarmland' element={<AddFarmland />} />
        </Route>


    </Routes>
};

export default AppRoutes;