(function () {
    "use strict";

    var myElement1 = document.getElementById('chat-msg-scroll');
    new SimpleBar(myElement1, { autoHide: true });
    
    var myElement2 = document.getElementById('chat-msg-scroll1');
    new SimpleBar(myElement2, { autoHide: true });
    
    var myElement3 = document.getElementById('chat-msg-scroll2');
    new SimpleBar(myElement3, { autoHide: true });

    var myElement4 = document.getElementById('main-chat-content');
    new SimpleBar(myElement4, { autoHide: true });

    var myElement5 = document.getElementById('chat-user-details');
    new SimpleBar(myElement5, { autoHide: true });

})();
