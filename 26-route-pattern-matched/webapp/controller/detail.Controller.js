sap.ui.define([
    "sap/ui/core/mvc/Controller"
    ], function(oController) {
        
        return oController.extend("sap.ui.demo.controller.detail",{
            onInit:function(){
                   console.log("detail controller - init"); 
            //get Router
            console.log(this.getOwnerComponent().getRouter());

            //link Event Handler Method
            this.getOwnerComponent().getRouter().attachRoutePatternMatched(this.showDetails,this);

            },
            //Event Handler Method
            showDetails:function(oEvent){
                console.log(oEvent);
                console.log(oEvent.getParameters());
                console.log(oEvent.getParameter("arguments"));
                console.log(oEvent.getParameter("arguments").fruitId);

                //bind Element
                this.getView().bindElement("/fruits/"+oEvent.getParameter("arguments").fruitId);
            },

            goBack:function(oEvent){  
/*                 console.log(oEvent);
                console.log("go back");
                this.getView().getParent().to("masterView"); */
            }
        });
    });