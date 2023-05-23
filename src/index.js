import ReactDOM from "react-dom";
import React from "react"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ParticleBackground from "./components/ParticleBackground";
//Pages

import HomePage from "./pages/HomePage";
import VerifyPage from "./pages/VerifyPage";
const Navigate = useNavigate
function App() {
    const [authenticated, setAuthenticated] = React.useState(false);

    React.useEffect(() => {
        const cookie = localStorage.getItem("cookie");

        fetch(`http://192.168.1.116:3002/api/checkAuth?cookie=${cookie}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.authenticated) {
                    setAuthenticated(true);
                } else {
                    setAuthenticated(false);
                }
            });
    }, []);

    return (
      
            
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            authenticated ? <HomePage /> : <Navigate to="/verify" />
                        }
                    />
                    <Route path="/verify" element={<VerifyPage />} />
                </Routes>
            </BrowserRouter>
        
    );
}


ReactDOM.render(<App />, document.querySelector("#root"));