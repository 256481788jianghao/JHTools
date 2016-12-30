/**
 * Created by smsx on 2016/12/29.
 */
var jhFile = new function(){
    var self = this;
    var fileObj = require("fs");
    jhUtils.debug(" fileObj="+fileObj,"jhFile");
    this.OPEN_READ = "r";
    this.OPEN_WRITE = "w";
    this.open = function(path,mode){
        return fileObj.openSync(path,mode);
    };
    this.readFile = function(path){
        return fileObj.readFileSync(path,'utf8');
    };
    this.writeFile = function(path,str){
        return fileObj.writeFileSync(path,str,'utf8');
    }

};
