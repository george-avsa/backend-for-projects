    const express = require("express");
    const mysql = require("mysql2");
    const app = express();
    const port = 3000;

    const kek = new Promise((resolve, reject) => {
        const connection = mysql.createConnection({
            host: "92.53.96.116",
            user: "cs71915_invoice",
            database: "cs71915_invoice",
            password: "Alp22212"
        })
        
        connection.query(
            'SELECT * FROM `invoices`',
            function(err, results, fields) {
                connection.close();
                resolve(results); 
            }
            )
    });

    app.get('/', (req, res) => {
        const email = req.params.email;
        const pass = req.params.pass;
        try {
            kek.then(data => res.send(JSON.stringify(data)));
        } catch (e) {
            console.log('something went wrong!');
        }
    })

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    });