Todos.TodoController = Ember.ObjectController.extend({


actions: {
    editTodo: function () {
      this.set('isEditing', true);
    }
  },
  acceptChanges: function() {
  	this.set('isEditing', false);
  	
  	if (Ember.isEmpty(this.get('model.title'))) {
  		this.send('removeToDo');
  	} else {
  	this.get('model').save();
  	}
  },
  removeTodo: function () {
  	var todo = this.get('model');
  	todo.deleteRecord();
  	todo.save();
  	},
  addHP: function () {
  	var todo=this.get('model');
  	var newHPa = todo.get('hp');
  	newHPa = newHPa+131;
  	todo.set('hp',  newHPa);
	todo.save();
	//return hp;
	},
subHP: function () {
  	var todo=this.get('model');
  	var newHP = todo.get('hp');
  	newHP = newHP-1;
  	todo.set('hp',  newHP);
	todo.save();
	//return hp;
	},
  isEditing: false,
  isCompleted: function(key, value){
    var model = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return model.get('isCompleted');
    } else {
      // property being used as a setter
      model.set('isCompleted', value);

      model.save();
      return value;
    }
  }.property('model.isCompleted')


});

