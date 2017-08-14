import Ember from 'ember';
var TableComponentComponent;

TableComponentComponent = Ember.Component.extend({

	didInsertElement () {
		// this._super(...arguments);
		this.tableObserver();
	},

	//the var
	headers: Em.A(),
	tableColumn: Em.A(),

	//the computed
	placementsData: Ember.computed('results', function(){
		return this.results.placements
	}),

	//the observer
	tableObserver: Ember.observer('placementsData', function() {

		// Variables
		let placements = this.get('placementsData');
		let models = this.get('models');

		// filtering placementsData
		for(let i = 0; i < Object.keys(placements).length; i++) {

			let tempArr = Em.A();

			if(Object.keys(placements)[i] === models[i].id) {

				let id = Object.keys(placements)[i];

				for(let ii = 0; ii < Object.keys(placements[id]).length; ii++){
					if(Object.keys(placements[id])[ii] === "count" || Object.keys(placements[id])[ii] === "cost") {

						//for the column
						tempArr[Object.keys(placements[id])[ii]] = placements[id][Object.keys(placements[id])[ii]];

						//for the header
						this.get('headers').addObject(Object.keys(placements[id])[ii]);

					  // EVENTS
					} else if (Object.keys(placements[id])[ii] === "events") {

						// headers that are events only
						let eventsOnly = [];
						let events = {};

						//For the headers Only
						for(let e = 0; e < Object.keys(placements[id].events).length; e++) {
							this.get('headers').addObject(Object.keys(placements[id].events)[e]);
						};

						let headers = this.get('headers')

						// Just to separate events from count and cost
						for(let e = 2; e < Object.keys(headers).length; e++){
							eventsOnly.push(headers[e]);
						};

						//for events
						for(let e = 0; e < eventsOnly.length; e++) {
							if(eventsOnly[e] === Object.keys(placements[id].events)[e]) {
								events[eventsOnly[e]] = placements[id].events[Object.keys(placements[id].events)[e]];
							} else {
								events[eventsOnly[e]] = 0;
							}
						}
						tempArr['events'] = events
					}
				};
			}
			this.get('tableColumn').addObject(tempArr);
		};
		console.log(this.get('tableColumn'))
		console.log(this.get('headers'))
	})
});

export default TableComponentComponent;