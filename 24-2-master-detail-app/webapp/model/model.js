sap.ui.define([
    "sap/ui/model/json/JSONModel" //load Json model
],function(JSONModel){
    return {//every function returns something - this returns a function
        createJSONModel:function(filePath){
            var oModel = new JSONModel();
            oModel.loadData(filePath);
            return oModel; //this function returns json model with loaded data
        }
    }
});