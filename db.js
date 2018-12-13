var mysql = require('mysql');


var options = {
    host: "",
    user: "",
    password: "",
    database: '',
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
