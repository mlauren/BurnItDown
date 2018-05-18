// ------ Basic setup ------

// every 10 seconds, add new fire to DOM

// every dom click, add another fire
// fire starts on chrome browser click

// if fake news site, make fires start immediately

//  ------ Adl Steps ------

// create same sized gifs 
// create grid to detect when one node is touching another
// 1 - 2 - 4 - 8 sized fires for grid
// sound effects and eventual explosion



function log(val) {
  console.log(val);
}

// define fire group
function FireList() {
  this.head = null;
  this.tail = null;
}
function FireNode(url, id, zIndex, next, prev) {
  this.url = url;
  this.id = id; // give an ID
  this.zIndex = zIndex;
  this.next = next;
  this.prev = next;
}

// add additional fire items to linked fire list for every click
FireList.prototype.addFireToHead = function() {}

FireList.prototype.addFireToTail = function(url, id) {
  var newNode = new FireNode(url, id, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
}

FireList.prototype.removeFireFromHead = function(id) {
  if (!this.head) return null;
  var val = this.head.id;
  // reset the values of the head in the linked list
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  // if there is no head, then there is no tail.
  else this.tail = null;
  return val;
}
// Fire Toolz
function FireTools() {
  this.nodeContainer = null;
  this.availableImg = [
    chrome.extension.getURL('/images/fire1.gif'),
    chrome.extension.getURL('/images/fire2.gif'),
    chrome.extension.getURL('/images/fire3.gif'),
    chrome.extension.getURL('/images/fire5.gif'),
    chrome.extension.getURL('/images/fire6.gif')
  ];
}

FireTools.prototype.addFireContainerToDom = function(domNameContainer) {
  // add additional fire to DOM
  domNameContainer = domNameContainer || '__flamify_nodes';
  var nodesContainer,
    d = document,
    zindex = 2147483638;

  nodesContainer = d.createElement('div');
  nodesContainer.id = domNameContainer;
  nodesContainer.style.zIndex = zindex;
  nodesContainer.style.outline = 0;

  this.setNodeContainer(domNameContainer);

  d.getElementsByTagName('body')[0].appendChild(nodesContainer);
}

FireTools.prototype.setNodeContainer = function(domNameContainer) {
  domNameContainer = domNameContainer || '__flamify_nodes';
  this.nodeContainer = document.getElementById(domNameContainer);
}

FireTools.prototype.fetchDomContainer = function(domNameContainer) {
  domNameContainer = domNameContainer || '__flamify_nodes';
  var d = document,
      nodesContainer;

  nodesContainer = d.getElementById(domNameContainer);
  if (!nodesContainer) return null;
  else return nodesContainer;
}

FireTools.prototype.addFireToDom = function(id) {
  var d = document,
      gifContainer = d.createElement('div'),
      heightRandom = Math.random()*.75,
      windowHeight = window.innerHeight,
      windowWidth = window.innerWidth,
      zindex = 2147483638,
      imagesSwatchLength = this.availableImg['length'] - 1,
      imgElement = document.createElement('img'),
      numType = 'px';

  gifContainer.id = '__flamify_nodes__node_' + id;
  gifContainer.onclick = this.addFireToDom;
  gifContainer.style.zIndex = zindex;
  gifContainer.style.outline = 0;

  // Todo - set this more incouragingly based on sector
  gifContainer.style.top = Math.round( windowHeight * heightRandom ) + numType;
  var whichImg = Math.round(Math.random() * imagesSwatchLength);
  imgElement.setAttribute('src', this.availableImg[whichImg]);
  console.log(gifContainer);
  console.log(imgElement);

  gifContainer.appendChild(imgElement);
  console.log(this.nodeContainer);
  this.nodeContainer.appendChild(gifContainer);
}

FireTools.prototype.fetchFireFromDom = function(id) {
  var d = document,
      desiredCont = '__flamify_nodes__node_' + id,
      gifContainer;

  gifContainer = d.getElementById(desiredCont);
  if (!gifContainer) return null;
}

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log('onMessage');
    var fireToolz = new FireTools();
    fireToolz.addFireContainerToDom();
    fireToolz.addFireToDom(1);
  }
);

