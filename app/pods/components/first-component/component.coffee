`import Ember from 'ember'`

FirstComponentComponent = Ember.Component.extend

	actions:
		toggleThings: ->
			console.log "component #", @get('number')


	# Some coffeescript notes
	# function(x, y){} == (x,y) ->
	# this. == @

`export default FirstComponentComponent`
