let element;
var letters = 'BCDEF'.split('');
// const url1 = `https://api.thedogapi.com/v1/breeds`;

let namedog = JSON.parse(window.localStorage.getItem('user')).toLowerCase();
let dogname1 = namedog.split(" ");
let dogname = dogname1[dogname1.length-1];
console.log(dogname);

const url1 = `https://dog.ceo/api/breed/${dogname}/images/random/120`;

async function getDog() {
    const res = await fetch(url1);
    data = await res.json();
    console.log(data)
    dogs = data.message;
    // if(dogs === "Breed not found (master breed does not exist)"){
    //     dogname = dogname1[dogname1.length-2];
        
    // }
    // else{
    //     dogname = dogname1[dogname1.length-1];
    // }
    console.log(dogname)
    console.log(dogs);
    return dogs;
    
}


 getDog().then(dogs => {
        dogs.forEach(element =>
       img_create(element)
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
        var  randcol= "";
            for(var i=0; i<6; i++){
            randcol += letters[Math.floor(Math.random() * letters.length)];
            }
            document.body.style.backgroundColor= "#"+randcol;
    }
} 
