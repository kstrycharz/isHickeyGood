const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all posts
app.get("/api/getTotalVotes", (req, res) => {
    db.query("SELECT COUNT(*) FROM ratings", (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
        console.log("Queried")
        console.log(result)
    });
});

app.get("/api/getTotalUpVotes", (req, res) => {
    db.query("SELECT COUNT(*) FROM ratings WHERE user_rating=1", (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
        console.log("Queried")
        console.log(result)
    });

});



app.get("/api/addUpVote", (req, res) => {
    db.query("INSERT INTO ratings (user_rating, rating_time) VALUES (1, CURRENT_TIMESTAMP)", (err, result) => {
        res.send(result)
        console.log("Up")
    });
    
});


app.get("/api/addDownVote", (req, res) => {
    db.query("INSERT INTO ratings (user_rating, rating_time) VALUES (0, CURRENT_TIMESTAMP)", (err, result) => {
        res.send(result)
        console.log("Down")
    });
    
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});