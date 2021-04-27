let element;
var letters = 'BCDEF'.split('');
const url1 = `https://api.thecatapi.com/v1/images/search?breed=true&limit=100`;

async function getDogPics() {
    const res = await fetch(url1);
    const dogs = await res.json();
    return dogs;
}

getDogPics().then(dogs => {
     dogs.forEach(element =>
        img_create(element.url)
     );
});
function img_create(url) {
    let div = document.createElement('div');
    div.id = "container";
    var img = document.createElement('img');
   
    img.src = url;

    div.appendChild(img);

    document.body.appendChild(div);

    img.onclick = function(){
        window.open(url, '_blank' );
        var  randcol= "";
            for(var i=0; i<6; i++){
            randcol += letters[Math.floor(Math.random() * letters.length)];
            }
            document.body.style.backgroundColor= "#"+randcol;
    }
} 
