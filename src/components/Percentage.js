
import './compstyle.css';
import AnimatedNumber from "animated-number-react";
//import axios from "axios";
import React, { useState, useEffect } from 'react'




function Percentage() {

    
    const formatValue = (value) => value.toFixed(2);
    const value = (GetVotes("http://localhost:3002/api/getTotalUpVotes") / GetVotes("http://localhost:3002/api/getTotalVotes") ) * 100
    
   

        return (
            <div className="Rating-style">
                Current Rating:
                &nbsp;
                

                <AnimatedNumber
                    value={value}
                    formatValue={formatValue}
                    
                    
                />

                %

            </div>
        );
    }

function GetVotes(query) {

    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            // Replace `apiUrl` with the actual URL of your API
            const response = await fetch(query);
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
    return data[0]["COUNT(*)"]
};




export default Percentage;