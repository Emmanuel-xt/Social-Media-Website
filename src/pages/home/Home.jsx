import React from "react";
import './home.css'
import { Person2Outlined } from "@mui/icons-material";
import Sidebar from "../../components/sidebar/Sidebar";
import Feedbar from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";


const Home = () => {
    return ( 
        <>
        <div className="homeContainer">
        <Sidebar />
        <Feedbar/>
        <Rightbar />
        </div>
        </>
     );
}
 
export default Home;