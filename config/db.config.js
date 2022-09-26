const mysql=require ('mysql');

//mysql connection
const dbConn= mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: 'fitness',
port :'4306'
});

dbConn.connect(function(error){
    if(error)throw error;
    console.log('database connected successfully');
})

module.exports = dbConn;