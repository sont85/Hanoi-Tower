'use strict';
var $;
define(function(){
  var tower = {
    numberOfTowers: 3,
    largestNumber: null,
    layerNumber: null,
    container1: $('#container1'),
    container2: $('#container2'),
    container3: $('#container3'),
    createLayer: function(i) {
      return $('<div>', {
        text: i,
        class: 'towers',
        id: 'tower' + i,
        style: 'background-color: rgb(' + parseInt(i * 10) + ',' + parseInt(i * 30) + ',' + parseInt(i * 30) + ')',
        width: i * 6.65 + '%'
      });
    },
    resetGame: function() {
      tower.numberOfTowers = null;
      tower.layerNumber = null;
      $('#winText').text('');
    },
    buildTower: function() {
      var i = 1;
      var arrayTower = [];
      while (i <= tower.numberOfTowers) {
        var layers = tower.createLayer(i);
        arrayTower.push(layers);
        i++;
      }
      $('.towers').remove();
      tower.container1.append(arrayTower);
    },
    removeLayer: function(towerContainer) {
      var firstChild = towerContainer.find(':first-child').detach();
      tower.layerNumber = firstChild.text();
    },
    addLayer: function(towerContainer) {
      var layer = tower.createLayer(tower.layerNumber);
      towerContainer.prepend(layer);
      tower.layerNumber = null;
    },
    winCheck: function() {
      if (tower.container3.children().length === tower.numberOfTowers) {
        $('#winText').text('Congratulation you solved a game ' + tower.numberOfTowers + 'towers!!');
      }
    }
  };
  return tower;
});
