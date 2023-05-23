import './compstyle.css';
import ThumbsUp from '../images/thumbs-up.png';
import ThumbsDown from '../images/thumbs-down.png';
import React, { useState, useEffect } from 'react'
//import Percentage from './Percentage';

let API_IP = "192.168.1.116" //IP of API

function Votebuttons() {


    const UpVote = () => {
        AddVote('http://192.168.1.116:3002/api/addUpVote')
        window.location.reload(false);
    }

    const DownVote = () => {
        AddVote('http://192.168.1.116:3002/api/addDownVote')
        window.location.reload(false);
    }



    const AddVote = async (query) => {
        const response = await fetch(query);
        const json = await response.json();
       
    }

    return (

            <div classname = "votebuttons-container">
                <div className="Vote-buttons" >


                <button onClick={UpVote}>

                        <img src={ThumbsUp} />

                    </button>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;


                    <button onClick={DownVote}>

                        <img src={ThumbsDown} />

                    </button>

                </div>
            </div>
        
        );


}




export default Votebuttons;