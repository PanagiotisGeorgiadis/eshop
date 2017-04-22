export default {

	// Maybe we should do a type of to check if it is an object.
	updateComponentStateFromProps: function(stateObject, propsObject) {

		for(var stateProperty in stateObject) {

			if(stateObject[stateProperty] && typeof stateObject[stateProperty] === "object" && propsObject[stateProperty])
				this.updateComponentStateFromProps(stateObject[stateProperty], propsObject[stateProperty]);
			
			if(propsObject[stateProperty] )
				stateObject[stateProperty] = propsObject[stateProperty];

			// console.log("propsObject has a matching property named " + stateProperties + "! stateObject." + stateProperties + " = " + stateObject[stateProperties] + " || propsObject." + stateProperties + " = " + propsObject[stateProperties]);
		}

		// return stateObject;
	}
}