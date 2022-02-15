var t=0;
flowers = ["ROSES", "CHRYSANTHEMUMS", "TULIPS", "LILIES", "ORCHIDS", "IRISES", "SUNFLOWERS", "HYDRANGEAS",];
place = ["ON A BEACH", "IN OUTERSPACE","ON MARS","ON A TROPICAL ISLAND","IN THE DEEP SEA","ON MOUNT EVEREST","ON THE EIFFEL TOWER","IN THE STATUE OF LIBERTY"];
light_source = ["SOLAR POWER","FLASHLIGHTS","FIRE","FIREFLIES","MOONLIGHT","LANTERNS","DAYLIGHT",];
inhabitants = ["ALIENS","TROLLS","DRAGONS","GIANTS","FAIRIES","UNICORNS","PEGASUSES"];

function rand_range(maximum) {
    "use strict";
    return Math.floor(Math.random() * (maximum + 1));
}
function choose(array) {
    "use strict";
    return array[rand_range(array.length - 1)];
}
function stanza() {
    "use strict";
    return '<span style="color:transparent">A HO</span>USE OF ' + choose(flowers) + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + choose(place) + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:transparent">U</span>SING ' + choose(light_source) + '<br \>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:transparent">INHABITED</span> BY ' + choose(inhabitants);
}
function litany() {
    "use strict";
    var last, text, main = document.getElementById('main');
    if (8 > t) {
        t += 1;
    } else {
        main.removeChild(document.getElementById('main').firstChild);
    }
    last = document.createElement('div');
    last.innerHTML = stanza();
    main.appendChild(last);
}
function produce_litany() {
    "use strict";
    litany();
    setInterval(litany, 5000);
}
