import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <div className="wrapper">
            <div className="content-area">
                <Sidebar/>
                <div className="right-content-area"> 
                    <Header/>
                    <Dashboard/>
                </div>
            </div>
        </div>
    );
}

export default App;