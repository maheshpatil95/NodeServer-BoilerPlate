var mysql = require('mysql');


var options = {
    host: "192.168.1.80",
    user: "root",
    password: "pass",
    database: 'fdlargefacegrouptest',
    timezone: 'utc'

}

var db;

function connectDB() {
    if (!db) {

        db = mysql.createConnection(options);
        db.connect(function (err) {
            if (err) {
                console.log('Error:', err);
            } else {
                console.log('Database Connected!!!');
            }
        })
    }

    return db;
}

module.exports = connectDB();
