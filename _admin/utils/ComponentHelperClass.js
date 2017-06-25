export default {

	// Maybe we should do a type of to check if it is an object.
	updateComponentStateFromProps: function(stateObject, propsObject) {

		if(stateObject && propsObject) {

			for(var stateProperty in stateObject) {

				if(stateObject[stateProperty] && typeof stateObject[stateProperty] === "object" && propsObject[stateProperty])
					this.updateComponentStateFromProps(stateObject[stateProperty], propsObject[stateProperty]);

				if(propsObject[stateProperty])
					stateObject[stateProperty] = propsObject[stateProperty];
			}// End of for loop.
		}

		// TODO: Write tests about this helper function.
		// This is a new implementation that hopefully covers all the different use cases. 
		/* if(typeof propsObject === "object") {

			for(var property in propsObject) {

				if(propsObject[property]) {

					if(Array.isArray(propsObject[property])) {

						for(var i = 0; i < propsObject[property].length; i++) {

							if(stateObject[property] && stateObject[property].length > 0)
								this.updateComponentStateFromProps(stateObject[property][i], propsObject[property][i]);
							else
								stateObject[property] = propsObject[property];
						}

					} else if (typeof propsObject[property] === "object") {

						if(stateObject[property])
							this.updateComponentStateFromProps(stateObject[property], propsObject[property]);
						else
							stateObject[property] = propsObject[property];

					} else {

						stateObject[property] = propsObject[property];
					}

				} // End of propsObject[property] null validation.
			} // End of for loop.

		} else {

			stateObject = propsObject;
		} */
	}
}