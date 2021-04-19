const url1 = `https://api.thedogapi.com/v1/breeds`;

async function getDogPics() {
    const res = await fetch(url1);
    const dogs = await res.json();
    return dogs;
}

// getDogPics().then(dogs => {
    
//      dogs.forEach(element =>
//         img_create(element.name,element.image.url)
//      );
// });
// function img_create(as, url) {
    
//     let div = document.createElement('div');
//     div.title = as;
//     div.innerHTML = as;
//     var img = document.createElement('img');
//     img.src = url;
//     img.title = as;
//     div.appendChild(img);
//     document.body.appendChild(div);
} 

