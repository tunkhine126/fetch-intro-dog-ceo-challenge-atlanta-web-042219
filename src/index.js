// console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function(){
  fetchDogs()
  fetchBreeds()
})

function fetchDogs(){
  fetch(imgUrl)
  .then(res => res.json())
  .then(json => json.message.forEach(showDogs))
}

function showDogs(dog){
  let container = document.getElementById('dog-image-container')
  const imgElement = document.createElement('img')
  imgElement.src = dog

  //append 
  container.appendChild(imgElement)
}

function fetchBreeds(){
  fetch(breedUrl)
  .then(res => res.json())
  .then(json => showBreeds(json.message))
}

function showBreeds(breeds){
  // console.log(breeds)
  let all_breeds = []
  for(let k in breeds) {
    if(breeds[k].length > 0)
      for(let x in breeds[k])
        all_breeds.push(breeds[k][x]+' '+k)
    else
      all_breeds.push(k)
  }

  const breedList = document.getElementById('dog-breeds')
  all_breeds.forEach(breed => {
    breedList.innerHTML += `<li>${breed}</li>`
  })

  breedList.addEventListener('click', handleEvents)
}

function handleEvents(e){
  // console.log(e.target)
  e.target.style.color = 'blue'
}

