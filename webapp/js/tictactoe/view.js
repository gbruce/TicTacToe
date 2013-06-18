
tictactoe.View = function(model) {
	var count1, count2, that = this;
	this.model = model;

	/* create table based on model state */
	$('#game-content').append('<table>');
	$('#game-content').append('<tbody>');

	for(count1=0; count1<this.model.tiles.length; count1 += this.model.size) {
		$('#game-content').append('<tr>');
		for(count2=0; count2<this.model.size; count2++) {
			var index = count1 + count2;
			$('#game-content').append('<td id="tile-' + index + '" class="game-tile">' + this.model.tiles[index] + '</td>');
		}
		$("#game-content").append("</tr>");
	}

	$('#game-content').append('</tbody>');
	$('#game-content').append('</table>');

	var updateTiles = function(index) {
		$('#tile-' + index).text(that.model.tiles[index]);
	};

	/* connect table to model change events */
	this.model.onTileChanged.add(updateTiles);
};

tictactoe.ButtonView = function(element, machine, model) {
	var that = this;
	this.machine = machine;
	this.model = model;

	var onMachineStateChanged = function() {
		var current = that.machine.current;
		if(current == 'init') {
			$(element).text('Start');
		}
		else if(current == 'playing') {
			$(element).text('Cancel');
		}
		else {
			$(element).text('Start');
		}
	};

	onMachineStateChanged();
	machine.OnStateChanged.add(onMachineStateChanged);
};