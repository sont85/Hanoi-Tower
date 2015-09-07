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
      tower.largestNumber = tower.container1.find(':first-child').text() || Number.MAX_VALUE;
      if (!tower.layerNumber) {
        tower.removeLayer($(this));
      } else if (tower.layerNumber < tower.largestNumber) {
        tower.addLayer($(this));
      }
    });
    tower.container2.click(function() {
      tower.largestNumber = tower.container2.find(':first-child').text() || Number.MAX_VALUE;
      if (!tower.layerNumber) {
        tower.removeLayer($(this));
      } else if (tower.layerNumber < tower.largestNumber) {
        tower.addLayer($(this));
      }
    });
    tower.container3.click(function() {
      tower.largestNumber = tower.container3.find(':first-child').text() || Number.MAX_VALUE;
      if (!tower.layerNumber) {
        tower.removeLayer($(this));
      } else if (tower.layerNumber < tower.largestNumber) {
        tower.addLayer($(this));
        tower.winCheck();
      }
    });
  });
})
