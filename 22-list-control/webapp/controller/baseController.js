sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/demo/util/utility"//changed from home to sap.ui.demo
], function(oController,utilityJS) {
    'use strict';
    return oController.extend("sap.ui.demo.controller.base",{
        formatter:utilityJS,//it is a propery
        //show details
        showDetails:function(oEvent){
            console.log(oEvent.getParameters());
            console.log(oEvent.getParameter("rowContext").getPath());
            //get the form id
            this.getView().byId("simpleForm").bindElement(oEvent.getParameter("rowContext").getPath());
        },
        //convert to upper case
        convertToUpperCase:function(inputValue){
            //this is a formatter function
            if(inputValue){
                return inputValue.toUpperCase();
            }
        }
    });
});