sap.ui.define([
"sap/ui/core/mvc/Controller"
], function(oController) {//here we have the conroller object
    'use strict';
    //now extend this standard controller object
    return oController.extend("home.controller.main",{
        //press function we have to move here  
        sayHello:function(){
            /* get Name*/
            //var name = oInput.getValue();we can't read like this
            //get the core
            var name = sap.ui.getCore().byId("idName").getValue();
            alert("Hi "+name+" , Welcome back to UI5!");

            //using set method
            sap.ui.getCore().byId("idClick").setText(name+" is back");
        },
        //now attach sayHello to the button using another method 
        //just to learn the attachEvent concept
        attachHello:function(){
        //note this line didn't work because it didn't get the Controller reference
        //so we have to pass it - look at the main.view.js - button part
        //sap.ui.getCore().byId("idClick").attachPress(sayHello());
        sap.ui.getCore().byId("idClick").attachPress(this.sayHello);
        }
    });
});