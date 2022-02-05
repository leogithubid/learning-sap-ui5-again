sap.ui.define([
    "sap/ui/core/format/NumberFormat"
], function(NumberFormat) {
    'use strict';
    return{
        //format salary using currency and salary
        formatSalary:function(salary,currency){
            console.log("formatting salary");
            var currencyInstance = NumberFormat.getCurrencyInstance();
            return currencyInstance.format(salary,currency);
        },
        //format name
        formatName:function(inputValue){
            if(inputValue){
                return inputValue.toUpperCase();
            }            
        }
    }
});