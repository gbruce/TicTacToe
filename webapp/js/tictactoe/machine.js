

tictactoe.Machine = function() {
	var machine = StateMachine.create({
		initial: 'init',
		events: [
			{ name: 'start',  from: 'init', to: 'playing' },
			{ name: 'gameover',  from: 'playing', to: 'end' },
			{ name: 'start',  from: 'end', to: 'playing' }
		],
		callbacks: {
			onenterinit: function(event, from, to) {
				var that = this;
				this.OnStateChanged = $.Callbacks();
				this.model = new tictactoe.Model();
				this.view = new tictactoe.View(this.model);
				this.buttonView = new tictactoe.ButtonView($('#start-button'), this, this.model);

				/* transition to playing */
				$('#start-button').on('click', function(){
					that.start();
				});
			},
			onleaveinit: function(event, from, to) {
				$('#start-button').off('click');
			},
			onenterplaying: function(event, from, to) {
				
			}
		}
	});

	return machine;
};
