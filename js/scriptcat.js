
const url = `https://api.thecatapi.com/v1/breeds`;
const form = document.querySelector("form");
let dogs, data, dogos, img, height, dogname;
let randomnum = Math.floor(Math.random()*60);
console.log(randomnum)

async function getDog() {
    const res = await fetch(url);
    data = await res.json();
    dogs = data.map(dog => dog.name);
    
    loop(dogs);
    getmyDog(randomnum);
}

getDog();


function loop(xx) {
    var select = document.getElementById('search');

    for (var i = 0; i <= xx.length; i++) {
        var opt = document.createElement('option');
        opt.value = xx[i];
        opt.innerHTML = xx[i];
        select.appendChild(opt);
    }
    $('#search').selectpicker();
}

function getmyDog(dogo) {
    
    dogos = data[dogo];
    console.log(data)

    update('name', 'Breed');    
    update('bred_for', 'Bred_for');
    update('origin', 'Origin');
    update('country_code', "Country-Code")
    update('temperament', 'Temperment');
    update('breed_group', 'Breed-group');
    update('life_span', 'Life-Span');
    // height = dogos.height.imperial;
    document.getElementById("height").innerHTML ="Height:- " + height +" Inches";
    let weight = dogos.weight.imperial;
    document.getElementById("weight").innerHTML ="Weight:- " + weight +" Kg";
    update('description', 'Description');

    $('.Wikipidea').remove();
    let wik= document.getElementById("wiki");
    
    let wikilink = document.createElement("a");
    wikilink.innerHTML= "Click here to read more.."
    wikilink.href = dogos.wikipedia_url;
    wikilink.className= "Wikipidea";
    wikilink.target="_blank";
    wik.appendChild(wikilink);



    // if(!wik){
       
    //     wikilink.href = dogos.wikipedia_url;
    // }
    // else{
    //     console.log("ojkay")
    //     let wikilink = document.createElement("a");
    //     wikilink.innerHTML= "Click here to read more.."
    //     wikilink.href = dogos.wikipedia_url;
    //     wikilink.className= "Wikipidea";
    //     wikilink.target="_blank";
    //     wik.appendChild(wikilink);
    // }


    // update('wiki', 'wikipedia_url');
    
    if(dogos.image.url === null){
        document.getElementById("dogPic").innerHTML = "Image is not available in Database.";
    }
    else{
        img = dogos.image.url;
        document.getElementById("dogPic").src = img;
    document.body.style.backgroundImage = `url(${img})`;

    }
    
    document.getElementById("dogName").innerHTML = dogos.name;
    //  + "<a href = morecatimages.html> More images<a>";
    dogname = dogos.name;
    console.log(dogname);
    window.localStorage.setItem('user', JSON.stringify(dogname));
    //I want to use dogos.name in moreimages.html file

}
function update(id, key) {
    let val = dogos?.[id];
    if (val) {
        document.getElementById(id).innerHTML = key + ":- " + val;
    }
    else if(key = ""){
        document.getElementById(id).innerHTML = "";
    }
    else {
        document.getElementById(id).innerHTML = key + "";
    }
}

function opnimage(){
    window.open(img, '_blank' );
}
