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

			let tempArr = {};

			if(Object.keys(placements)[i] === models[i].id) {

				let id = Object.keys(placements)[i]

				for(let ii = 0; ii < Object.keys(placements[id]).length; ii++){
					if(Object.keys(placements[id])[ii] === "count" || Object.keys(placements[id])[ii] === "cost" || Object.keys(placements[id])[ii] === "events" ) {
						tempArr[Object.keys(placements[id])[ii]] = placements[id][Object.keys(placements[id])[ii]];
					}
				}
			}
			this.get('tableColumn').addObject(tempArr)
		}

		//filtered tablecolumn
		let filteredColumn = this.get('tableColumn')

		//retriving all keys on table column
		filteredColumn.map( headers => {
			for(let i = 0; i < Object.keys(headers).length; i++) {
				if(Object.keys(headers)[i] !== "events") {
					this.get('headers').addObject(Object.keys(headers)[i])
				} else {
					for (let ii = 0; ii < Object.keys(headers.events).length; ii++) {
						this.get('headers').addObject(Object.keys(headers.events)[ii])
					}
				}
			}
		});
	})
});

export default TableComponentComponent;