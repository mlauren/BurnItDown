
window.FireDefined = window.FireDefined || true;

var OnFire = function() {

  this.flameContainers = this.flameContainers || [];

  this.initializeFire = function() {
    var d = document,
        node = d.getElementById('__flamify_nodes'),
        nodeElement = null;

    if (!node) {
      nodeElement = d.createElement('div');
      nodeElement.id = '__flamify_nodes';
      d.getElementsByTagName('body')[0].appendChild(nodeElement);

      this._addFlameButton();
    }

    // cornify_add();
  }

  this.setFire = function() {
    console.log('oop');

  };


  // Clicking the rainbow cupcake button makes all the unicorns
  // disappear (should only be used in an emergency, since it's sad).
  this._clickFlame = function() {
    var doc = document;

    /*var nodes = doc.getElementById('__cornify_nodes');
    if(nodes) {
        nodes.parentNode.removeChild(nodes);
    }*/

    var button = doc.getElementById('__onfire_flame_button');
    if(button) {
        button.parentNode.removeChild(button);
    }

    var flame;
    for( var i = 0; i < this.flameContainers.length; i++ ) {
        flame = this.flameContainers[i];
        flame.parentNode.removeChild(flame);
    }

    // removing this because...
    // flameContainers = [];
  };

  // Add the rainbow cupcake button to the page.
  this._addFlameButton = function() {
    var id = '__onfire_flame_button',
        doc = document,
        button = doc.getElementById(id);

    if ( !button ) {
        button = doc.createElement('div');
        button.id = id;
        button.onclick = this._clickFlame;
        button.style.position = 'fixed';
        button.style.top = '10px';
        button.style.right = '10px';
        button.style.zIndex = 2147483640;

        var image = document.createElement('img');
        image.src = 'images/firePS.jpg';
        image.width = 50;
        image.height = 50;
        image.style.width = '50px !important';
        image.style.height = '50px !important';
        image.style.display = 'block !important';
        image.style.cursor = 'pointer !important';
        image.style.margin = '0 !important';
        image.style.padding = '0 !important';
        button.appendChild(image);

        doc.getElementsByTagName('body')[0].appendChild(button);
    }
  };


  // this.setFire();

  var setItAflame = window.FireDefined ? this.initializeFire() : false;

}

OnFire();
console.log('set it on fire!');

