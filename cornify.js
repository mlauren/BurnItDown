if(!window['cornify_defined']) {

    window['cornify_defined'] = true;
    var cornify_unicorntainers = [];

    // The real deal.
    var cornify = function () {
        var d = document,
            j = d.getElementById('__cornify_nodes'),
            k = null;
            
        if (!j) {
            k = d.createElement('div');
            k.id = '__cornify_nodes';
            d.getElementsByTagName('body')[0].appendChild(k);

            cornify_add_cupcake_button();
        }
        
        cornify_add();
    };

    var cornify_count = 0;
    var cornify_add = function() {
        cornify_count += 1;
        var cornify_url = 'https://www.cornify.com/';
        var div = document.createElement('div');
        div.style.position = 'fixed';

        cornify_unicorntainers.push(div);
      
        var numType = 'px';
        var heightRandom = Math.random()*.75;
        var windowHeight = 768;
        var windowWidth = 1024;
        var height = 0;
        var width = 0;
        var de = document.documentElement;
        if(typeof(window.innerHeight) == 'number') {
            windowHeight = window.innerHeight;
            windowWidth = window.innerWidth;
        } else if(de && de.clientHeight) {
            windowHeight = de.clientHeight;
            windowWidth = de.clientWidth;
        } else {
            numType = '%';
            height = Math.round( height*100 )+'%';
        }
      
        div.onclick = cornify_add;
        div.style.zIndex = 2147483638;
        div.style.outline = 0;
      
        if(cornify_count == 15) {
            div.style.top = Math.max( 0, Math.round( (windowHeight-530)/2 ) )  + 'px';
            div.style.left = Math.round( (windowWidth-530)/2 ) + 'px';
            div.style.zIndex = 2147483639;
        } else {
            if(numType == 'px') div.style.top = Math.round( windowHeight*heightRandom ) + numType;
            else div.style.top = height;
            div.style.left = Math.round( Math.random()*90 ) + '%';
        }
      
        var img = document.createElement('img');
        var currentTime = new Date();
        var submitTime = currentTime.getTime();
        if( cornify_count==15 ) submitTime = 0;
        img.setAttribute('src',cornify_url+'getacorn.php?r=' + submitTime + '&url='+document.location.href);
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(div);
        div.appendChild(img);
      
        // Add stylesheet.
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
        } 
    };

    // Clicking the rainbow cupcake button makes all the unicorns
    // disappear (should only be used in an emergency, since it's sad).
    var cornify_click_cupcake_button = function() {
        var doc = document;

        var nodes = doc.getElementById('__cornify_nodes');
        if(nodes) {
            nodes.parentNode.removeChild(nodes);
        }

        var button = doc.getElementById('__cornify_cupcake_button');
        if(button) {
            button.parentNode.removeChild(button);
        }

        var corn;
        for(var i=0; i<cornify_unicorntainers.length; i++) {
            corn = cornify_unicorntainers[i];
            corn.parentNode.removeChild(corn);
        }
        cornify_unicorntainers = [];
    };

    // Add the rainbow cupcake button to the page.
    var cornify_add_cupcake_button = function() {
        var id = '__cornify_cupcake_button';
        var doc = document;
        var button = doc.getElementById(id);
            
        if(!button) {
            button = doc.createElement('div');
            button.id = id;
            button.onclick = cornify_click_cupcake_button;
            button.style.position = 'fixed';
            button.style.top = '10px';
            button.style.right = '10px';
            button.style.zIndex = 2147483640;

            var image = document.createElement('img');
            image.src = 'https://www.cornify.com/assets/cornify-cupcake-button.png';
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

    // Add amazing words to the headers on the page.
    var cornify_replace = function() {
        // Replace text.
        var hc = 6;
        var hs;
        var h;
        var k;

        // var words = [
        //     'Happy',
        //     'Sparkly',
        //     'Glittery',
        //     'Fun',
        //     'Magical',
        //     'Lovely',
        //     'Cute',
        //     'Charming',
        //     'Amazing',
        //     'Wonderful'
        // ];

        var words = [
            chrome.i18n.getMessage('title_word_1'),
            chrome.i18n.getMessage('title_word_2'),
            chrome.i18n.getMessage('title_word_3'),
            chrome.i18n.getMessage('title_word_4'),
            chrome.i18n.getMessage('title_word_5'),
            chrome.i18n.getMessage('title_word_6'),
            chrome.i18n.getMessage('title_word_7'),
            chrome.i18n.getMessage('title_word_8'),
            chrome.i18n.getMessage('title_word_9'),
            chrome.i18n.getMessage('title_word_10'),
        ];

        while(hc >= 1) {
            hs = document.getElementsByTagName('h' + hc);
            for(k = 0; k < hs.length; k++) {
                h = hs[k];
                h.innerHTML = words[Math.floor(Math.random()*words.length)] + ' ' + h.innerHTML;
            }
            hc -= 1;
        }
    };

    /*
     * Adapted from http://www.snaptortoise.com/konami-js/
     */
    var cornami = {
        input:"",
        pattern:"38384040373937396665",
        clear:setTimeout('cornami.clear_input()',5000),
        load: function() {
            window.document.onkeydown = function(e) {
                if(cornami.input == cornami.pattern) {
                    cornify_add();
                    clearTimeout(cornami.clear);
                    return;
                } else {
                    cornami.input += e ? e.keyCode : event.keyCode;
                    
                    if (cornami.input == cornami.pattern) {
                        cornify_add();
                    }

                    clearTimeout(cornami.clear);
                    cornami.clear = setTimeout("cornami.clear_input()", 5000);
                }
            }
        },
        clear_input: function() {
            cornami.input = "";
            clearTimeout(cornami.clear);
        }
    };

    cornami.load();

    chrome.extension.onMessage.addListener(
        function(request, sender, sendResponse) {
            console.log('onMessage');
            cornify();
        }
    );
} else {
    // Silencio
}
