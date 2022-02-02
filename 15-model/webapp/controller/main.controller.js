sap.ui.define([
"sap/ui/core/mvc/Controller"
], function(oController) {//here we have the conroller object
    'use strict';
    //now extend this standard controller object
    return oController.extend("home.controller.main",{
        onInit:function(){
            console.log("init");
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.loadData("model/employeeData.json");
            sap.ui.getCore().setModel(oModel);
            //2 types of syntaxes for data bindi
            //view level - 2 sub types - look up in the view
            //controller level - 2 sub types - see below
            var salary = this.getView().byId("salary");
            salary.bindValue("/employeeStructure/salary");
            var currency = this.getView().byId("currency");
            currency.bindProperty("value","/employeeStructure/currency");
        },
        onBeforeRendering:function(){
            console.log("before");
        },
        onAfterRendering:function(){
            console.log("after");
            $("idView--idSimpleForm").fadeOut(3000,function(){
                $(this).fadeIn(3000);
            });
        },
        onExit:function(){
            console.log("exit");
        },
        //press function we have to move here  
        sayHello:function(oEvent){
            /* get Name*/
            //var name = oInput.getValue();we can't read like this
            //get the core
            //var name = sap.ui.getCore().byId("idName").getValue();
            //the above code won't work anymore, so we have to rewrite
            var name = this.getView().byId("idName").getValue();
            alert("Hi "+name+" , Welcome back to UI5!");
            console.log(oEvent.getSource());
            console.log(oEvent.getParameters());
            //using set method
            //this also won't work
            //sap.ui.getCore().byId("idClick").setText(name+" is back");
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