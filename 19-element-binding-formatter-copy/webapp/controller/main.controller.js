sap.ui.define([
"sap/ui/core/mvc/Controller",
"home/model/model",
"home/controller/baseController"
], function(oController,ModelJS,oBase) {//here we have the conroller object
    'use strict';
    //now extend this standard controller object
    return oBase.extend("home.controller.main",{
        onInit:function(){
            console.log("init");
            //console.log(formatter);
            //17-just rewriting the creation of model
            //var oModel = new sap.ui.model.json.JSONModel();
            //oModel.loadData("model/employeeData.json");
            var oModel = ModelJS.createJSONModel("model/employeeData.json");
            sap.ui.getCore().setModel(oModel);
            var oModel2 = ModelJS.createJSONModel("model/employeeData2.json");
            sap.ui.getCore().setModel(oModel2,"second");
            //16-changing the default binding mode
            //oModel.setDefaultBindingMode("OneWay");
            //2 types of syntaxes for data bindi
            //view level - 2 sub types - look up in the view
            //controller level - 2 sub types - see below
            var salary = this.getView().byId("salary");
            //16-You may have to comment the below line,for expression binding
            salary.bindValue("/employeeStructure/salary");
            var currency = this.getView().byId("currency");
            currency.bindProperty("value","/employeeStructure/currency");

            //one time binding of i18n
            var oResourceModel = new sap.ui.model.resource.ResourceModel({
                bundleUrl : "i18n/i18n.properties"
            });
            sap.ui.getCore().setModel(oResourceModel,"i18n");
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
        },
        flipModel:function(){
            //get defaul model
            var defaultModel = sap.ui.getCore().getModel();
            //get named model
            var secondModel = sap.ui.getCore().getModel("second");
            //set named model as default model
            sap.ui.getCore().setModel(secondModel);
            //set defaul model as named model
            sap.ui.getCore().setModel(defaultModel,"second");

            //just modifying this method to read from XML Model
/*             var xmlModel = new sap.ui.model.xml.XMLModel();
            xmlModel.loadData("model/mockData3.xml");
            sap.ui.getCore().setModel(xmlModel); */
        }
    });
});