import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Percentage() {
    const [upVotes, setUpVotes] = useState(0);
    const [totalVotes, setTotalVotes] = useState(0);

    const calculatePercentage = () => {
        const percentage = (upVotes / totalVotes) * 100;
        return percentage.toFixed(2);
    };

    const fetchVotes = async () => {
        try {
            const upVotesResponse = await axios.get('http://192.168.1.116:3002/api/getTotalUpVotes');
            const totalVotesResponse = await axios.get('http://192.168.1.116:3002/api/getTotalVotes');
            setUpVotes(upVotesResponse.data[0]['COUNT(*)']);
            setTotalVotes(totalVotesResponse.data[0]['COUNT(*)']);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchVotes();
        const interval = setInterval(fetchVotes, 50000); // fetch votes every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className = "percentage-container">

            <div className="Rating-style">
                Current Rating: {calculatePercentage()}%
            </div>
        </div>
    );  
}

export default Percentage;
