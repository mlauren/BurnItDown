
window.FireDefined = window.FireDefined || true;

var OnFire = function() {

  

  this.initializeFire = function() {
    var d = document,
        node = d.getElementById('__flamify_nodes'),
        nodeElement = null;

    this.flameContainers = this.flameContainers || [];
    this.fireCount = 1;

    if (!node) {
      nodeElement = d.createElement('div');
      nodeElement.id = '__flamify_nodes';
      d.getElementsByTagName('body')[0].appendChild(nodeElement);

      this._addFlameButton();
    }

    // cornify_add();
    this.setFire();
  }


  this.setFire = function()
  {
    this.fireCount += 1;

    var divElement = document.createElement('div');
        divElement.style.position = 'fixed';

    this.flameContainers.push(divElement);

    var heightRandom = Math.random()*.75
      , windowHeight = 768
      , windowWidth = 1024
      , height = 0
      , width = 0
      , de = document.documentElement
      , numType = 'px';

    // Check browser compatability
    if(typeof(window.innerHeight) == 'number') {
      windowHeight = window.innerHeight;
      windowWidth = window.innerWidth;
    }
    else if (de && de.clientHeight) {
      windowHeight = de.clientHeight;
      windowWidth = de.clientWidth;
    }
    else {
      numType = '%';
      height = Math.round( height * 100 ) + '%';
    }

    divElement.onclick = cornify_add;
    divElement.style.zIndex = 2147483638;
    divElement.style.outline = 0;
    

    if ( this.fireCount == 15 ) {
      divElement.style.top = Math.max( 0, Math.round( (windowHeight - 530) / 2 ) )  + 'px';
      divElement.style.left = Math.round( (windowWidth-530)/2 ) + 'px';
      divElement.style.zIndex = 2147483639;
    } else {
      if ( numType == 'px' ) divElement.style.top = Math.round( windowHeight * heightRandom ) + numType;
      else divElement.style.top = height;
      divElement.style.left = Math.round( Math.random() * 90 ) + '%';
    }

    var imgElement = document.createElement('img');
    
    var currentTime = new Date();
    
    var images = [

    ];
    /*var submitTime = currentTime.getTime();
    if( cornify_count==15 ) submitTime = 0;
    img.setAttribute('src',cornify_url+'getacorn.php?r=' + submitTime + '&url='+document.location.href);
    */

    var body = document.getElementsByTagName('body')[0];

    body.appendChild(divElement);
    divElement.appendChild(imgElement);

    // Add stylesheet.
    /*
    if (cornify_count == 5) {
      var cssExisting = document.getElementById('__cornify_css');
      if (!cssExisting) {
        var head = document.getElementsByTagName("head")[0];
        var css = document.createElement('link');
        css.id = '__cornify_css';
        css.type = 'text/css';
        css.rel = 'stylesheet';
        css.href = 'https://www.cornify.com/css/cornify.css';
        css.media = 'screen';
        head.appendChild(css);
      }
      cornify_replace();
    } */
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
        image.src = chrome.extension.getURL('/images/firePS.jpg');
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

