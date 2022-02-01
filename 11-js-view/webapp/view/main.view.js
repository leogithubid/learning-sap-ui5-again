sap.ui.jsview("dummy.view.main",{
    //get controller
    getControllerName:function(){
        return "dummy.controller.main" //give controller address
    },
    //create view content
    createContent:function(){//now we have the controller
    //here build the view
         /*create input control*/
        var oInput = new sap.m.Input("idName",{
            width : "500px",
            placeholder : "Please enter your name"
        });
       // oInput.placeAt("divName");
        /*create button control*/  
          var oButton = new sap.m.Button("idClick",{
            text : "Click Me",
            icon : "sap-icon://hello-world",
            press : function(){
                /* get Name*/
                var name = oInput.getValue();
                alert("Hi "+name+",Welcome back to UI5!");
            }
        }); 
        //return these two controls
        return [oInput,oButton];
    }
});