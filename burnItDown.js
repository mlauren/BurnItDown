// define fire group
function log(val) {
  console.log(val);
}

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
  this.domNameContainer = '__flamify_nodes';
  this.addDomContainer = function (domNameContainer = '__flamify_nodes') {
    // create dom object.
    var d = document,
        node = d.getElementById(domNameContainer),
        nodeElement = null;

    if (!node) {
      nodeElement = d.createElement('div');
      nodeElement.id = domNameContainer;
      d.getElementsByTagName('body')[0].appendChild(nodeElement);
      return nodeElement;
    }
  }
  this.fetchDomContainer = function(domNameContainer = '__flamify_nodes') {
    // create dom object.
    var d = document,
    node = d.getElementById(domNameContainer),

    if (!node) {
      return null;
    } else {
      return node;
    }
  }
  this.availableImg = [
    chrome.extension.getURL('/images/fire1.gif'),
    chrome.extension.getURL('/images/fire2.gif'),
    chrome.extension.getURL('/images/fire3.gif'),
    chrome.extension.getURL('/images/fire4.gif'),
    chrome.extension.getURL('/images/fire5.gif'),
    chrome.extension.getURL('/images/fire6.gif')
  ];
}
// every 10 seconds, add new fire to DOM


// get ID, Get URL and pass it to the dom function as well as the node function

FireTools.prototype.addFireToDom = function(id, url) {
  // if ID already exists inside the DOM , return null

  var node = this.fetchDomContainer();
  if (!node) {
    node = this.addDomContainer();
  }
  // add additional fire to DOM
  var imgElement = document.createElement('img'),
    whichImg,
    d = document,
    nodesContainer = node;
  imgElement.setAttribute('id', id);
  imgElement.setAttribute('src', url);
}

FireTools.prototype.fetchFireFromDom = function(id) {


}

FireTools.prototype.removeFireFromDom = function() {
  
}


// check if val exists in list
LinkedList.prototype.search = function(searchValue) {
  var currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
}

LinkedList.prototype.indexOf = function(value) {
  var indexes = [];
  var currentIndex = 0;
  var currentNode = this.head;

  while (currentNode) {
    if (currentNode.value === value ) {
      indexes.push(currentIndex);
    }
    currentNode = currentNode.next;
    currentIndex++;
  }
  return indexes;
}
