sap.ui.define([
    "sap/ui/core/UIComponent"
],function(UIComponent){
    return UIComponent.extend("sap.ui.demo.Content",{
        //metadata
        metadata:{},
        //initialisation
        init:function(){
            //to invoke default functionality, call base class constructor
            //this is standard for all app - so copy this 
            UIComponent.prototype.init.apply(this);
        },
        //create views
        createContent:function(){
            //create App view
            var appView = new sap.ui.core.mvc.XMLView("appView",{
                viewName : "sap.ui.demo.view.App",
                type     : "XMLView"
            });
            //create main view
            var mainView = new sap.ui.core.mvc.XMLView("mainView",{
                viewName : "sap.ui.demo.view.main",
                type     : "XMLView"
            });
            //add main view to the App container
            appView.byId("appControl").addPage(mainView);
            //every function will have a return
            return appView;
        },
        //destructor
        destroy:function(){

        }
    });
})