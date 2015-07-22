App.PlayerRoute = Ember.Route.extend({
	setupController: function(controller, player){
	
		controller.set('hp', player);
	}
	model: function(){
		return this.store.find('player');
	}
});