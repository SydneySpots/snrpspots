Todos.Todo = DS.Model.extend({

	hp: DS.attr('number',{defaultValue: 200}),
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
{
	id:1,
	hp:'100',
	title: 'Learn Ember.js',
	isCompleted: true
},
{
	id:2,
	hp:300,
	title: '...',
	isCompleted: false
},
{
	id: 3,
	hp:3000,
	title: 'Pro222fi2t!',
	isCompleted: true
},
{
	id: 4,
	hp:230,
	title: 'Pa1!',
	isCompleted: false
}
];