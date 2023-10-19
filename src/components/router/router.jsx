import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../login/login";

function Router() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />}></Route>
            </Routes>
        </BrowserRouter>
     );
}

export default Router;