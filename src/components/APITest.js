import React, { useState, useEffect } from 'react'
import Axios from 'axios'
//import { useHistory } from '../react-router-dom'
import '../App.css'

function MainPage() {


   

  

    
    return (
        <div className="MainPage">
            
                {GetVal}
            
        </div>
    )
}


function GetVal() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            // Replace `apiUrl` with the actual URL of your API
            const response = await fetch("http://localhost:3002/api/getTotalUpVotes");
            const json = await response.json();
            setData(json);
        }
        fetchData();
    }, []);

    // Return a loading state while waiting for the data to be fetched
    if (!data) {
        return <div>Loading...</div>;
    }

    // Print the data once it has been fetched
    return <div>{data[0]["COUNT(*)"]}</div>;
}


//export default MainPage;
export default GetVal;