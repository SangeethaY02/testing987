({
	helperAddition : function(component, event, helper) {
        var num1=component.get("v.variable1");
        var num2=component.get("v.variable2");
        var res=num1 + num2;
        component.set("v.result",res);
        
        
        // var event = $A.get("e.c:mathEvent");//
        var event = component.getEvent("mathCmpEvent");
        event.setParams({
            "eventvar1": num1,
            "eventvar2": num2
        });
        event.fire();
		
	}
})