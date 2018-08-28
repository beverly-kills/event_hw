'use strict';

(function(){
    var box = document.querySelector('.box');
    var textarea = document.createElement('textarea');
    var edit = function(){
        document.body.replaceChild(textarea, box);
        textarea.className = 'box';
        textarea.value = box.innerText;
    }
    var save = function(){
        document.body.replaceChild(box, textarea);
        box.innerHTML = textarea.value;
    }
    var cancel = function(){
        document.body.replaceChild(box, textarea);
    }

    var keyPress = function(e){
        // e.preventDefault();
        if (e.ctrlKey && e.keyCode == 69) {
            edit();
        }

        if (e.ctrlKey && e.keyCode == 83) {
            save();
        }

        if (e.keyCode == 27) {
            cancel();
        }
    }

    document.addEventListener('keydown', keyPress);
})();