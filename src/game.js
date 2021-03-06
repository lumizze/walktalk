Game = {
  map_grid: {
    width: 32,
    height: 24,
    tile: {
        width: 16,
        height: 16
    }
  },

  width: function() {
    return this.map_grid.width * this.map_grid.tile.width;
  },

  height: function() {
    return this.map_grid.height * this.map_grid.tile.height;
  },

  start: function() {
    Crafty.init(Game.width(), Game.height());
    Crafty.background('rgb(83, 83, 83)');

    Crafty.scene('Loading');
  }
};
