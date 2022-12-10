import './compstyle.css';
import ThumbsUp from '../images/thumbs-up.png';
import ThumbsDown from '../images/thumbs-down.png';
import React, { useState, useEffect } from 'react'
//import Percentage from './Percentage';


function Votebuttons() {


    const UpVote = () => {
        AddVote("http://localhost:3002/api/addUpVote")
        window.location.reload(false);
    }

    const DownVote = () => {
        AddVote('http://localhost:3002/api/addDownVote')
        window.location.reload(false);
    }



    const AddVote = async (query) => {
        const response = await fetch(query);
        const json = await response.json();
       
    }

    return (
   
            <div className="Vote-buttons">


             <button onClick={UpVote}>

                    <img src={ThumbsUp} />

                </button>
                &nbsp;


                <button onClick={DownVote}>

                    <img src={ThumbsDown} />

                </button>

            </div>
        
        );


}




export default Votebuttons;