sap.ui.define([
"sap/ui/core/mvc/Controller",
"sap/ui/demo/model/model",//I had to change here from home to sap.ui.demo
"sap/ui/demo/controller/baseController"//here also
], function(oController,ModelJS,oBase) {//here we have the conroller object
    'use strict';
    //now extend this standard controller object
    return oBase.extend("sap.ui.demo.controller.main",{
        onInit:function(){
            console.log("init");
            //all model instantiation moved to manifest.json
            //so we don't need modeljs anymore, even basecontroller is no
            //longer needed
        },
        onItemPress:function(oEvent){
            //step 25 - this is gone
 /*            console.log(oEvent);
            this.goNext(oEvent.getParameter("listItem")); */
                //we have to get the Router - how to get it? 
                //Router is defined in Component.JS so first we have to that
                console.log(this.getOwnerComponent());//this gets Component.js
                //from this get the router
                console.log(this.getOwnerComponent().getRouter());
                //using the router navigate to another target - we are giving target
                this.getOwnerComponent().getRouter().navTo("detail");
        },
        //Like how button has a press event, searchfield has a search event
        //this method is linked to that
        onSearch:function(oEvent){
                //get user input
                console.log(oEvent);
                console.log(oEvent.getParameters());
                var userInput = oEvent.getParameter("query");
                console.log(userInput);
                //get list object
                var fruitsList = this.getView().byId("idList");
                console.log(this.getView());
                console.log(fruitsList);
                //get binding
                var itemsBinding = fruitsList.getBinding("items");
                console.log(itemsBinding);
                //create filter
                var filter1 = new sap.ui.model.Filter("name",sap.ui.model.FilterOperator.Contains,userInput);
                console.log(filter1);
                var filter2 = new sap.ui.model.Filter("price",sap.ui.model.FilterOperator.EQ,userInput);
                //attach filter to binding
                //itemsBinding.filter([filter1,filter2]);
                //this will not work as it looks for AND condition, so
                var filter3 = new sap.ui.model.Filter({
                    filters : [filter1,filter2],
                    and : false
                }
                );
                itemsBinding.filter(filter3);
        },
        onDelete:function(oEvent){
            //step1-get the item to be deleted
            console.log(oEvent.getParameter("listItem"));
            console.log(oEvent.getParameter("listItem").getTitle());
            var oListItem = oEvent.getParameter("listItem");
            console.log(oEvent.getParameter(oListItem));
            //step2-get the list object
            console.log(oEvent.getSource());
            var oList = oEvent.getSource();
            //step3-remove this from the list object
            oList.removeItem(oListItem);
        },
//added to the Next button
        goNext:function(listItem){
            //get this view
            console.log(this.getView());
            //get its parent - ie, split app control
            console.log(this.getView().getParent());
            //get the detail view page
            console.log(this.getView().getParent().getParent());
            //get master page
            console.log(this.getView().getParent().getParent().getMasterPage());
            //get detail pages
            console.log(this.getView().getParent().getParent().getDetailPages());
            //get the detail page
            console.log(this.getView().getParent().getParent().getDetailPages()[0]);
            //get the next view
            var detailView = this.getView().getParent().getParent().getDetailPages()[0];
            //now get to the list control and object header
            console.log(detailView.getContent());
            console.log(detailView.getContent()[0]);
            console.log(detailView.getContent()[0].getContent());
            console.log(detailView.getContent()[0].getContent()[0]);
            var objectHeader = detailView.getContent()[0].getContent()[0];
            //bind the selection
            objectHeader.bindElement(listItem.getBindingContextPath());



/*             console.log(this.getView());//this will give us view one
            console.log(this.getView().getParent());//this will go one level above to  app view
            this.getView().getParent().to("detailView");//from app view navigate to view to
            //24-this is for binding for the next page
            //get the app control
            var oApp = this.getView().getParent();
            //get its pages
            console.log(oApp.getPages()); */
            //get main page
/*             console.log(oApp.getPages()[0]);
            //get detail page
            console.log(oApp.getPages()[1]);
            //now we have to do element binding to the selected item
            //then we will add object list header to show the item details
            //so how to get the selected item? 
            console.log(listItem);
            //get the contents of the view
            console.log(oApp.getPages()[1].getContent());
            //the above line gives us the detail Page control
            //so get the contents inside it
            console.log(oApp.getPages()[1].getContent()[0].getContent());
            //object header is the top so get it
            var objectHeader = oApp.getPages()[1].getContent()[0].getContent()[0];
            console.log(objectHeader);
            //now we have to do element binding
            //what to bind it to ? we have listItem from that we have to derive
            console.log(listItem.getBindingContextPath());
            objectHeader.bindElement(listItem.getBindingContextPath()); */
        },
        onBeforeRendering:function(){
            console.log("before");
        },
        onAfterRendering:function(){
        },
        onExit:function(){
            console.log("exit");
        },
        //press function we have to move here  
        sayHello:function(oEvent){
        },
        //now attach sayHello to the button using another method 
        //just to learn the attachEvent concept
        attachHello:function(){
        //note this line didn't work because it didn't get the Controller reference
        //so we have to pass it - look at the main.view.js - button part
        //sap.ui.getCore().byId("idClick").attachPress(sayHello());
        },
        flipModel:function(){
            //get defaul model
        }
    });
});