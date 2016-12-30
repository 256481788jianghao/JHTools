function JHApplication(name,dataBase){
    var self = this;
    this.name = name;
    this.dataBase = dataBase;
}
JHApplication.prototype.create = function(){
}
JHApplication.prototype.run = function(){
}
JHApplication.prototype.backMain = function(){
    this.dataBase.update();
    window.location.reload();
}

