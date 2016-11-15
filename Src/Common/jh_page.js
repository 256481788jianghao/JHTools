/**
 * Created by smsx on 2016/11/14.
 */

function JhPage(){}
JhPage.prototype.name = "page";
JhPage.prototype.zlevel = 0;
JhPage.prototype.err = function(str){
    jhUtils.err("page name="+this.name+" info:"+str);
};
JhPage.prototype.warn = function(str){
    jhUtils.warn("page name="+this.name+" info:"+str);
};
JhPage.prototype.onCreate = function(){
    return null;
};
JhPage.prototype.onStart = function(){
    return null;
};
JhPage.prototype.onRelease = function(){
    return null;
};


var jhPageMgr = new function(){
    var pageStack = [];
    
    function logE(str){
        jhUtils.err("PageMgr:"+str);
    }
    function logW(str){
        jhUtils.warn("PageMgr:"+str);
    }
    this.curPage = null;
    this.lastPage = null;
    this.registerPage = function(page){
        if(!(page instanceof JhPage)){
            logE("page is not a instance of JhPage");
        }
        logW("register Page name="+page.name);
        pageStack.push(page);
    };
    this.loadPage = function(pageName){
        logW("load page name="+pageName);
        var isFind = false;
        for(var i=0;i<pageStack.length;i++){
            if(pageStack[i].name == pageName){
                isFind = true;
                this.lastPage = this.curPage;
                this.curPage = pageStack[i];
            }
        }
        if(!isFind){
            logE("can not find page name="+pageName);
        }else{
            if(this.lastPage)
                this.lastPage.onRelease();
            this.curPage.onCreate();
            this.curPage.onStart();
        }
    };
}
