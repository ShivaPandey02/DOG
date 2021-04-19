let element;
var letters = 'BCDEF'.split('');
const url1 = `https://api.thedogapi.com/v1/breeds`;

async function getDogPics() {
    const res = await fetch(url1);
    const dogs = await res.json();
    return dogs;
}

getDogPics().then(dogs => {
     dogs.forEach(element =>
        img_create(element.name,element.image.url)
     );
});
function img_create(as, url) {
    let div = document.createElement('div');
    div.id = "container";
    var img = document.createElement('img');
    img.src = url;
    img.id = as;
    var content = document.createElement('div');
    div.appendChild(img);
    div.appendChild(content);
    content.innerHTML="Breed: "+as;
    content.id="content"
    document.body.appendChild(div);

    img.onclick = function(){
        var  randcol= "";
            for(var i=0; i<6; i++){
            randcol += letters[Math.floor(Math.random() * letters.length)];
            }
            document.body.style.backgroundColor= "#"+randcol;
    }
} 
