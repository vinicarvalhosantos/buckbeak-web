import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MyNavbar from "./components/MyNavbar";


function Index() {
    return (
        <BrowserRouter>
            <MyNavbar/>
            <Routes>
                <Route path="/" element={<App/>}/>
            </Routes>
        </BrowserRouter>
    )

}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
);
