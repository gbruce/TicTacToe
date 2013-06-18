

tictactoe.Machine = function() {
};

tictactoe.Machine.prototype = {
	/* handlers */
	onenterinit: function(event, from, to) {
		this.model = new tictactoe.Model();
		this.view = new tictactoe.View(this.model);
	}
}