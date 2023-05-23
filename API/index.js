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
        console.log("Total Votes Queried ", result)
       
    });
});

app.get("/api/getTotalUpVotes", (req, res) => {
    db.query("SELECT COUNT(*) FROM ratings WHERE user_rating=1", (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
        console.log("Total Up Votes Queried", result)
        
    });

});



app.get("/api/addUpVote", (req, res) => {
    db.query("INSERT INTO ratings (user_rating, rating_time) VALUES (1, CURRENT_TIMESTAMP)", (err, result) => {
        res.send(result)
        console.log("Up Vote added")
    });
    
});


app.get("/api/addDownVote", (req, res) => {
    db.query("INSERT INTO ratings (user_rating, rating_time) VALUES (0, CURRENT_TIMESTAMP)", (err, result) => {
        res.send(result)
        console.log("Down vote added")
    });
    
});

app.post("/api/saveUser", (req, res) => {
    const { email, cookie } = req.body;

    const query = `INSERT INTO users (email, cookie) VALUES ('${email}', '${cookie}')`;

    db.query(query, (error, results, fields) => {
        if (error) {
            console.error("Error saving user:", error);
            res.status(500).json({ success: false });
            return;
        }
        console.log("User saved to database:", email, cookie);
        res.json({ success: true });
    });
});


app.get("/api/checkAuth", (req, res) => {
    const cookie = req.query.cookie;
    console.log(`cookie is: '${ cookie }'`);

    const query = `SELECT * FROM users WHERE cookie = '${cookie}'`;

    db.query(query, (error, results, fields) => {
        if (error) {
            console.error("Error checking user authentication:", error);
            res.status(500).json({ authenticated: false });
            return;
        }

        if (results.length === 0) {
            // User not found in database
            res.json({ authenticated: false });
            console.log("User is not authenticated")
        } else {
            // User found in database
            res.json({ authenticated: true });
            console.log("User is authenticated")
        }
    });
});





app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});