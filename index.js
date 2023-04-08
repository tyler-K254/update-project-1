
//Get activities from database which are to be posted to (#character-bar span)
function getCharacternames(){
    fetch('http://localhost:3000/characters')
    .then(res => res.json())
    .then(characters => characters.forEach(data => addCharacterNames(data)))
    // .then(data => console.log(data))
}

//Get activities from database which are to update DOM Details to be displayed in div
function getCharacternamesSecond(){
    fetch('http://localhost:3000/characters')
    .then(res => res.json())
    .then(characters => characters.forEach(data2 => displayDetails(data2)))
    // .then(data => console.log(data))
    
    
} 

//Call the activity names function an Get data
function initialize(){
   getCharacternames();

}
initialize()




function addCharacterNames(data){
    //create activity image
   
    
    let activityDiv = document.createElement('div')
    activityDiv.setAttribute('id','activityDiv')
    let image = document.createElement('img');
    image.src = data.icon;
    image.setAttribute('id','icon');
    let title = document.createElement('h4');
    title.textContent = data.title;
    title.setAttribute('class','activityTitle')
    image.addEventListener('click', function(){
        return displayDetails(data);
    })

    document.querySelector('#character-bar').appendChild(image)
    document.querySelector('#character-bar').appendChild(title)

    console.log(image)
}

//Display acitivity details on the details DIV
function displayDetails(data2){
    //activity name to detailed info div
    let name = document.querySelector('#name');
    name.textContent = data2.name; 
    //activity image to detailed info div
    let img = document.querySelector('#image')
    img.src = (data2.image)
   //activity location and price
    let place_1 = document.querySelector('#place-1')
    place_1.textContent = data2.place1;

    let place_2 = document.querySelector('#place-2')
    place_2.textContent = data2.place2;

    let place_3 = document.querySelector('#place-3')
    place_3.textContent = data2.place3;




}
