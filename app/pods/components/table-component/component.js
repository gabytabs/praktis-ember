import Ember from 'ember';
var TableComponentComponent;

TableComponentComponent = Ember.Component.extend({

	didInsertElement () {
		// this._super(...arguments);
		this.tableObserver();
	},

	//the var
	eventHeaders: Ember.A(), //Has all the filtered event header
	allEvents: Ember.A(), //Has all the event objects for headers
	tableColumn: Ember.A(), //returns all objects from PLACEMENTS w/o the keyId
	transformedColumn: Ember.A(), // final output

	//the computed
	placementsData: Ember.computed('results', function(){
		return this.results.placements
	}),
	placementId: Ember.computed('placementsData', function(){
		return Object.keys(this.get('placementsData'))
	}),



	tableObserver: Ember.observer('placementsData', function() {
		//TEST 1
		console.log(this.get('placementId'));
		console.log(this.get('placementsData'));

		// SEND TO AN COLUMN ARRAY
		for(let i = 0; i < this.get('placementId').length; i++) {
			// debugger;
			let column = this.get('placementsData')[this.get('placementId')[i]];
			this.get('tableColumn').addObject(column);
			this.get('allEvents').addObject(column.events)
		};
		// PUSH KEY TO EVENTHEADERS
		this.get('allEvents').map(event => {
			for(let i = 0; i < Object.keys(event).length; i++) {
				this.get('eventHeaders').addObject(Object.keys(event)[i]);
			};
		});
		//TEST 2
		console.log(this.get('tableColumn'));
		console.log(this.get('eventHeaders'));

		// PUSH COUNT AND COST TO TRANSFORMED COLUMN
		this.get('tableColumn').map(column => {
			let columnOwnObject = {};
			for(let i = 0; i < Object.keys(column).length; i++){
				if(Object.keys(column)[i] == "count"){
					columnOwnObject[[Object.keys(column)[i]]] = column[[Object.keys(column)[i]]];
				} else if(Object.keys(column)[i] == "cost"){
					columnOwnObject[[Object.keys(column)[i]]] = column[[Object.keys(column)[i]]];
				} else if(Object.keys(column)[i] == "events") {
					for(let e = 0; e < Object.keys(column.events).length; e++){
						columnOwnObject[Object.keys(column.events)[e]] = column.events[Object.keys(column.events)[e]];
					}
				};
			};
			this.get('transformedColumn').addObject(columnOwnObject);
		});
		



		console.log(this.get('transformedColumn'));
	}),
});

export default TableComponentComponent;


	// transformed: Em.computed('placementId', function(){
	// 	newArray = this.get("placementId").map (placement) function(){
	// 		key = Object.keys(placmement)[0];
	// 		data = placement[key];
	// 		data["id"] = key
	// 	}
	// })