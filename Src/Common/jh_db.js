function JHDB(dbPath){
    var m_path = dbPath;
    var dataObj = {};
    this.revert = function(){
        try{
            var dataJsonStr = jhFile.readFile(m_path);
            dataObj = JSON.parse(dataJsonStr);
        }catch(e){
            dataOjb = {};
            jhUtils.err("new JHDB str="+e.toString(),"JHDB");
        }
    }
    this.getObj = function(){
        return dataObj;
    };
    this.insert = function(key,value){
        dataObj[key] = value;
    };
    this.getValueByKey = function(key){
        return dataObj[key];
    };
    this.update = function(){
       try{
          jhFile.writeFile(m_path,JSON.stringify(dataObj));
       }catch(e){
          jhUtils.err("db update err="+e.toString(),"JHDB");
       }
    };
    this.clear = function(){
        dataObj = {};
    };
    this.revert();
}
