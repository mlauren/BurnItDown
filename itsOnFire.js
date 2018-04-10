

/*
  UI stuff
  - get numero % working for special cases
  - coverage needs to look better


*/

var OnFire = function() {

  window.FireDefined = window.FireDefined || true;

  window.flameContainers = window.flameContainers || [];
  console.log(window.flameContainers);
  this.fireCount = this.fireCount || 0;

  this.initializeFire = function()
  {
    var d = document,
        node = d.getElementById('__flamify_nodes'),
        nodeElement = null;

    if (!node) {
      nodeElement = d.createElement('div');
      nodeElement.id = '__flamify_nodes';
      d.getElementsByTagName('body')[0].appendChild(nodeElement);

      this.addFlameButton();
    }
    this.setFire();
  }

  this.setFire = function()
  {
    this.fireCount++;

    var divElement = document.createElement('div');
        divElement.style.position = 'fixed';

    var heightRandom = Math.random()*.75
      , windowHeight = 768
      , windowWidth = 1024
      , height = 0
      , width = 0
      , de = document.documentElement
      , numType = 'px';

    // Check browser compatability
    if ( typeof(window.innerHeight) == 'number' ) {
      windowHeight = window.innerHeight;
      windowWidth = window.innerWidth;
    }
    else if ( de && de.clientHeight ) {
      windowHeight = de.clientHeight;
      windowWidth = de.clientWidth;
    }
    else {
      numType = '%';
      height = Math.round( height * 100 ) + '%';
    }

    divElement.onclick = this.setFire;
    var zindex = 2147483638;
    divElement.style.zIndex = zindex;
    divElement.style.outline = 0;
    var special;

    var special = this.fireCount % 11;
    console.log( special === 0 );

    if ( special === 0 ) {
      // console.log( Math.round(Math.random() * special) );
      // console.log('style top', Math.max( 0, Math.round( (windowHeight - 530) / 2 ) ) );
      // console.log('style left', Math.round( ( windowWidth - 530 ) / 2 ) );
      var randomWidth = Math.floor((Math.random() * windowWidth) + 1);
      var randomHeight = Math.floor((Math.random() * windowHeight) + 1);

      divElement.style.top = Math.max( 0, Math.round( (windowHeight - randomHeight) / 2 ) )  + 'px';
      divElement.style.left = Math.round( ( windowWidth - randomWidth ) / 2 ) + 'px';
      divElement.style.zIndex = zindex + 1;
    } else {
      if ( numType == 'px' ) {
        divElement.style.top = Math.round( windowHeight * heightRandom ) + numType;
      }
      else divElement.style.top = height;
      divElement.style.left = Math.round( Math.random() * 90 ) + '%';
    }

    var imgElement = document.createElement('img'),
        whichImg,
        d = document,
        nodes = d.getElementById('__flamify_nodes');

    var imagesSwatch = [
      chrome.extension.getURL('/images/fire1.gif'),
      chrome.extension.getURL('/images/fire2.gif'),
      chrome.extension.getURL('/images/fire3.gif'),
      chrome.extension.getURL('/images/fire4.gif'),
      chrome.extension.getURL('/images/fire6.gif')
    ];

    var imagesSwatchLength = imagesSwatch['length'] - 1;
    whichImg = Math.round(Math.random() * imagesSwatchLength);
    if ( special === 0 ) {
      imgElement.setAttribute('src', chrome.extension.getURL('/images/fire5.gif'));
    }
    else {
      imgElement.setAttribute('src', imagesSwatch[whichImg]);
    }

    nodes.appendChild(divElement);
    divElement.appendChild(imgElement);


    window.flameContainers.push(divElement);

    console.log(window.flameContainers);
  };

  // Clicking the rainbow cupcake button makes all the unicorns
  // disappear (should only be used in an emergency, since it's sad).
  this.clickFlame = function()
  {
    var doc = document;
    /*
    var nodes = doc.getElementById('__flamify_nodes');
    if(nodes) {
        nodes.parentNode.removeChild(nodes);
    }*/

    var button = doc.getElementById('__onfire_flame_button');
    if(button) {
        button.parentNode.removeChild(button);
    }

    var flame;
    console.log(window.flameContainers);
    for( var i = 0; i < window.flameContainers['length']; i++ ) {
        flame = window.flameContainers[i];
        window.flameContainers[i].parentNode.removeChild(flame);
    }
    // empty the containers
    window.flameContainers = [];
  };

  this.addFlameButton = function()
  {
    var id = '__onfire_flame_button',
        doc = document,
        button = doc.getElementById(id);

    if ( !button ) {
        button = doc.createElement('div');
        button.id = id;
        button.onclick = this.clickFlame;
        button.style.position = 'fixed';
        button.style.top = '10px';
        button.style.right = '10px';
        button.style.zIndex = 2147483640;

        var image = document.createElement('img');
        image.src = chrome.extension.getURL('/images/nomorefire.png');
        image.width = 27;
        image.height = 36;
        image.style.width = '27px !important';
        image.style.height = '36px !important';
        image.style.display = 'block !important';
        image.style.cursor = 'pointer !important';
        image.style.margin = '0 !important';
        image.style.padding = '0 !important';
        button.appendChild(image);

        doc.getElementsByTagName('body')[0].appendChild(button);
    }
  };

  chrome.extension.onMessage.addListener(
      function(request, sender, sendResponse) {
          console.log('onMessage');
          this.initializeFire();
      }
  );

}

if ( ! window.FireDefined ) {
  OnFire();
}
