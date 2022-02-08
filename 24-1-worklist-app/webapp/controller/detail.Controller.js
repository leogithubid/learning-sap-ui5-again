sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function(Controller){
        return Controller.extend("sap.ui.demo.detail",{
            goBack:function(){
                console.log(this.getView());//this will get us view two
                console.log(this.getView().getParent());//this will go one level above to app id
                this.getView().getParent().to("mainView");//from app view navigate to view one
            }
        });
});
