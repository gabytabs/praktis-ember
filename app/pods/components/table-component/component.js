import Ember from 'ember';
var TableComponentComponent;

TableComponentComponent = Ember.Component.extend({

	didInsertElement () {
		this._super(...arguments);
		this.tableObserver();
	},

	//the var
	tableHeader: Ember.A(),
	tableColumn: Ember.A(),

	//the computed
	placements: Ember.computed('results', function(){
		return this.results.placements 
	}),

	// transformed: Em.computed('placementId', function(){
	// 	newArray = this.get("placementId").map (placement) function(){
	// 		key = Object.keys(placmement)[0];
	// 		data = placement[key];
	// 		data["id"] = key
	// 	}
	// })

	placementId: Ember.computed('placements', function(){
		return Object.keys(this.get('placements'))
		// return this.tableHeader + this.tableColumn;
	}),
	placement: Ember.computed('placements', function(){
		// debugger;
		var placementarr = this.get('placements').map(work => {
			return work;
		});
		return placementarr
	}),

	tableObserver: Ember.observer('tableClicked', function() {
		console.log("this came from the observer");
		console.log(this.get('placementColumn'));
		console.log(this.get('placementId'));
		console.log(this.get('placement'));
	}),
});

export default TableComponentComponent;