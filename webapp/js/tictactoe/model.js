

tictactoe.Model = function() {
	var that = this;

	/* none, x, o */
	this.winner = 'none';

	/* array of tiles representing the game state */
	/* valid values are 'o','x', '' */
	this.tiles = ['','','','','','','','',''];

	/* dimension of the game */
	this.size = 3;

	this.setWinner = function(winner) {
		that.winner = winner;
		that.onWinnerChanged.fire(winner);
	};

	this.updateTile = function(index, state) {
		that.tiles[index] = state;
		that.onTileChanged.fire(index);
	};

	this.onWinnerChanged = $.Callbacks();
	this.onTileChanged = $.Callbacks();
};