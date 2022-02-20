var t = 0
let myTitle = "MYTHICAL ISLANDS"
let myArticleArray = ["A BOUQUET OF", "A GARDEN OF", "A ROOM FULL OF"]
let flowers = ["ROSES", "CHRYSANTHEMUMS", "TULIPS", "LILIES", "ORCHIDS", "IRISES", "SUNFLOWERS", "HYDRANGEAS"]
let places = ["ON A BEACH", "IN OUTERSPACE","ON MARS","ON A TROPICAL ISLAND","IN THE DEEP SEA","ON MOUNT EVEREST","ON THE EIFFEL TOWER","IN THE STATUE OF LIBERTY"]
let light_source = ["SOLAR POWER","FLASHLIGHTS","FIRE","FIREFLIES","MOONLIGHT","LANTERNS","DAYLIGHT"];
let inhabitants = ["ALIENS","TROLLS","DRAGONS","GIANTS","FAIRIES","UNICORNS","PEGASUSES"];

let text = "";
text += myTitle + "<br>" + "by Grace Zhu" + "<br><br>"
for(let i=0; i<8; i++){
  text += getRandomItem(myArticleArray)+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+getRandomItem(flowers)+"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+getRandomItem(places)+"<br>"+"DECORATED BY &nbsp;&nbsp;&nbsp;"+getRandomItem(inhabitants)+"<br><br>";
}
document.getElementById("demo").innerHTML = text;
function getRandomItem(array){
  return array[Math.floor(Math.random()*array.length)]
}


