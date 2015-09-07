'use strict';
var $;
require(['tower'], function(tower) {
  $(document).ready(function() {
    $('#towerInput').change(function() {
      tower.resetGame();
      tower.numberOfTowers = $(this).val();
      tower.buildTower();
    });
    tower.container1.click(function() {
			tower.clickTower($(this));
    });
    tower.container2.click(function() {
			tower.clickTower($(this));
    });
    tower.container3.click(function() {
			tower.clickTower($(this), tower.winCheck);
    });
  });
});
