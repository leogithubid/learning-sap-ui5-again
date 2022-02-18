sap.ui.define([
    "sap/ui/core/UIComponent"
],function(UIComponent){
    return UIComponent.extend("sap.ui.demo.Content",{
        //metadata
        metadata:{
            //linking manifest json
            "manifest" : "json"
        },
        //initialisation
        init:function(){
            //to invoke default functionality, call base class constructor
            //this is standard for all app - so copy this 
            UIComponent.prototype.init.apply(this);
            //router
            var oRouter = this.getRouter();
            console.log(oRouter);
            oRouter.initialize();
        },
        //destructor
        destroy:function(){

        }
    });
})