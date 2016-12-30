/**
 * Created by smsx on 2016/11/14.
 */

var jhUtils = new function(){
    var  self = this;
    this.debug = function(str,tag){
        if(console.log){
            console.log(str+" tag="+tag);
        }
    };
    this.err = function(str,tag){
        this.debug("===[err]===:"+str,tag);
    };
    this.warn = function(str,tag){
        this.debug("===[warnning]===:"+str,tag);
    };
};
