var sqlDb = require("mssql");
var setings = require("../settings");

exports.executeSql = function (sql, callback) {
   var conn = new sqlDb.ConnectionPool(setings.dbConfig)
   conn.connect()
   .then(function() {
        var req = new sqlDb.Request(conn);
        req.query(sql)
        .then(function(recordset){
               callback(recordset);
        })
        .catch (function(err){
                console.log(err);
                callback(null, err);
        });
   })
   .catch (function(err) {
        console.logerr;
        callback(null, err);
   })
};