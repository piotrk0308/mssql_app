var http = require("http");
var emp = require("../controllers/employee");
var settings = require("../settings");

http.createServer(function (req, resp){
    switch (req.method) {
        case "GET":
            if (req.url==="/"){
                resp.end();
            }
            else if (req.url==="/employees" ){
                emp.getList(req,resp);
            }
            break;
        case "POST":
            break;
         case "PUT":
            break;
        case "DELETE":
            break;  
            default:
            break; 
    }
}).listen(9000, function (){
    console.log("Startet on port:"+ settings.webport);
})