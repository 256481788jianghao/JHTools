/**
 * Created by smsx on 2016/11/14.
 */

var jhUtils = new function(){
    var  self = this;
    this.debug = function(str){
        if(console.log){
            console.log(str);
        }
    };
    this.err = function(str){
        this.debug("===[err]===:"+str);
    };
    this.warn = function(str){
        this.debug("===[warnning]===:"+str);
    };
};
