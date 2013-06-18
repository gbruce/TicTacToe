

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

				/* transition to playing, this should go in the view */
				$('#start-button').on('click', function(){
					that.start();
				});
			},
			onleaveinit: function(event, from, to) {
				$('#start-button').off('click');
			},
			onenterplaying: function(event, from, to) {
				this.OnStateChanged.fire();

				var i, that = this;
				this.currentPlayer = 'x';

				/* this should go into the view */
				for(i=0; i<this.model.tiles.length; i++) {
					$('#tile-'+i).attr('index', i).on('click', function(){
						var index = $(this).attr('index');
						if(that.model.tiles[index] == '') {
							that.model.updateTile(index, that.currentPlayer);
							if( that.currentPlayer == 'x'){
								that.currentPlayer = 'o';
							}
							else {
								that.currentPlayer = 'x';
							}
						}
					});
				}
			}
		}
	});

	return machine;
};
