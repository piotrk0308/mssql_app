var db = require("../core/db");

exports.getList = function(req,resp) {
    db.executeSql("SELECT * FROM  emp", function(data, err){
        if (err)
        {
            resp.writeHead(500, "Internal Error", {"Content-Type":"text/html"});
            resp.write("<html><head><title>500</title></head><body>500: Internal Error. Detailis:"+ err+"</body></html>");
        }
        else  {
            resp.writeHead(200,"Content-Type: application/json");
            resp.write(JSON.stringify(data));
        }
        resp.end();
    });
};
exports.get = function(req,resp, empno){

};

exports.add = function (req,resp,reqBody){

};
exports.update = function (req, resp, reqBody) {

};

exports.delete = function (req, resp, reqBody) {

};