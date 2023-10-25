import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/login";
import Welcome from "../pages/Welcome/welcome";

function Router() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/Welcome" element={<Welcome />}></Route>
            </Routes>
        </BrowserRouter>
     );
}

export default Router;