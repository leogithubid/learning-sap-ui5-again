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
        },
        //create views
        createContent:function(){
            //all manifest can tell is App view is the root view
            //& what are the models, linking to other views we have to do here
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
            //create detail view
            var detailView = new sap.ui.core.mvc.XMLView("detailView",{
                viewName : "sap.ui.demo.view.detail",
                type     : "XMLView"
            });
            //add main view to the App container
            appView.byId("appControl").addPage(mainView).addPage(detailView);
            //every function will have a return
            return appView;
        },
        //destructor
        destroy:function(){

        }
    });
})