import React from "react";
import { Routes, Route } from 'react-router-dom';

import Login from "./account/Login";
import Home from "./Home";
import Duty from "./Duty";
import Profile from "./account/Profile";
import Program from "./Statistical/Program_report";
import Template_report from "./Statistical/Template_report"
import Mission_report from "./Statistical/Mission_report"
import Mission_information from "./Statistical/Mission_information"
import Search_for_tasks from "./Statistical/Search_for_tasks"
import Expert from "./Category/Expert"
import Stage from "./Category/Stage";
import Science from "./Category/Science";
import Specialized from "./Category/Specialized";
import Managing_unit from "./Category/Managing_unit";
import Adminsnistor from "./Category/Admisnistor";
import Academic_rank from "./Category/Academic_rank";
import Degree from "./Category/Degree";
import Title from "./Category/Title";
import Position from "./Category/Position";
import Product_form from "./Category/Product_form";
import Product_type from "./Category/Product_type";
import Program_type from "./Category/Program_type";
import Management_agency from "./Category/Management_agency";
import Type_of_dispatch from "./Category/Type_of_dispatch";
import Task_attachment_type from "./Category/Task_attachment_type";
import User_group from "./System_management/User_group";
import User from "./System_management/User";
import Login_log from "./System_management/Login_log";
import Error_log from "./System_management/Error_log";
import System_configuration from "./System_management/System_configuration";
import Data_sharing_API from "./Help/Data_sharing_API";
import Usage_procedure from "./Help/Usage_procedure";
import Software_information from "./Help/Software_information";



const Main = () => {
    return (
        <Routes>
            <Route exact path="/" element={ <Home /> }></Route>
            <Route exact path="/login" element={ <Login /> }></Route>
            <Route exact path="/home" element={ <Home /> }></Route>
            <Route exact path="/duty" element={ <Duty /> }></Route>
            <Route exact path="/profile" element={ <Profile /> }></Route>
            <Route exact path="/Statistical/programReport" element={ <Program /> }></Route>
            <Route exact path="/Statistical/Template_report" element={ <Template_report /> }></Route>
            <Route exact path="/Statistical/Mission_report" element={ <Mission_report /> }></Route>
            <Route exact path="/Statistical/Mission_information" element={ <Mission_information /> }></Route>
            <Route exact path="/Statistical/Search_for_tasks" element={ <Search_for_tasks /> }></Route>
            <Route exact path="/Category/Expert" element={ <Expert /> }></Route>
            <Route exact path="/Category/Stage" element={ <Stage /> }></Route>
            <Route exact path="/Category/Science" element={ <Science /> }></Route>
            <Route exact path="/Category/Specialized" element={ <Specialized /> }></Route>
            <Route exact path="/Category/Managing_unit" element={ <Managing_unit /> }></Route>
            <Route exact path="/Category/Adminsnistor" element={ <Adminsnistor /> }></Route>
            <Route exact path="/Category/Academic_rank" element={ <Academic_rank /> }></Route>
            <Route exact path="/Category/Degree" element={ <Degree /> }></Route>
            <Route exact path="/Category/Title" element={ <Title /> }></Route>
            <Route exact path="/Category/Position" element={ <Position /> }></Route>
            <Route exact path="/Category/Product_form" element={ <Product_form /> }></Route>
            <Route exact path="/Category/Product_type" element={ <Product_type /> }></Route>
            <Route exact path="/Category/Program_type" element={ <Program_type /> }></Route>
            <Route exact path="/Category/Management_agency" element={ <Management_agency /> }></Route>
            <Route exact path="/Category/Type_of_dispatch" element={ <Type_of_dispatch /> }></Route>
            <Route exact path="/Category/Task_attachment_type" element={ <Task_attachment_type /> }></Route>
            <Route exact path="/System_management/User_group" element={ <User_group /> }></Route>
            <Route exact path="/System_management/User" element={ <User /> }></Route>
            <Route exact path="/System_management/Login_log" element={ <Login_log /> }></Route>
            <Route exact path="/System_management/Error_log" element={ <Error_log /> }></Route>
            <Route exact path="/System_management/System_configuration" element={ <System_configuration /> }></Route>
            <Route exact path="/Help/Data_sharing_API" element={ <Data_sharing_API /> }></Route>
            <Route exact path="/Help/Usage_procedure" element={ <Usage_procedure /> }></Route>
            <Route exact path="/Help/Software_information" element={ <Software_information /> }></Route>
        </Routes>
    )
}

export default Main;