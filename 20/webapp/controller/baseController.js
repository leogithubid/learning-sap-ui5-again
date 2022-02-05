sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "home/util/utility"
], function(oController,utilityJS) {
    'use strict';
    return oController.extend("home.controller.base",{
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