import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Form from './components/form';
import Challan from './components/challan';


function ErrorPage() {
    return (
        <div>
            <h1>Error 404 Page not found</h1>
        </div>
    )
}
function RouteConfig() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/challan" element={<Challan />}>
                    </Route>
                    <Route exact path="/" element={<Form />}>
                    </Route>
                    <Route path="*" element={<ErrorPage />}>
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default RouteConfig