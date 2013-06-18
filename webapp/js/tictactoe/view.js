
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

	var updateTiles = function() {
		/* update the tile text */
		var count;
		for(count=0; count<this.model.tiles.length; count++) {
			$('tile-' + count).text(this.model.tiles[count]);
		}
	};

	/* connect table to model change events */
	this.model.onTileChanged.add(updateTiles);
};

