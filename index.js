var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

var helloSpeaker = {};

helloSpeaker.speak = function() {
    function speakHello(name) {
        console.log('Hello ' + name);
    }

    function speakGoodbye(name) {
        console.log('Goodbye ' + name);
    }

    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        var firstLetter = name.charAt(0).toLowerCase();

        if (firstLetter === "j") {
            speakGoodbye(name);
        } else {
            speakHello(name);
        }
    }
};

helloSpeaker.speak();
