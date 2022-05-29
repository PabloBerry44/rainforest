// LOADING SCREEN
const loading = document.querySelector('.loading')
window.onload=function(){
    loading.style.display = 'none'
}

const tucan1 = document.querySelector('#tucan1')
const tucan2 = document.querySelector('#tucan2')
const right_tree = document.querySelector('#right_tree')
const left_fern = document.querySelector('#left_fern')
const photo = document.querySelector('#photo')
const parallax = document.querySelector('.parallax')

function desktop()
{
  window.addEventListener('scroll', ()=>{
      const positionY = window.scrollY
  
      tucan1.style.transform = 'translateY('+positionY*0.04 + 'em)'
      right_tree.style.transform = 'translateX(' +positionY*0.01+ 'em) rotateZ(-20deg)'
      left_fern.style.transform = 'translateX(' +positionY*(-0.01)+ 'em)'
      
      photo.style.transform = 'translateY('+-positionY*0.18+'px)'
  })
}

function mobile()
{
  window.addEventListener('scroll', ()=>{
      const positionY = -window.scrollY
      photo.style.transform = 'translateY('+positionY*0.14+'px)'
  })
}

if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)))
{
  desktop()
}
else{
  mobile()
}

const endTitle = document.querySelector('.endTitle')
const endTitleText = endTitle.textContent
const cursor = document.querySelector('.cursor')
const ending = document.querySelector('.ending')

tempText =''
endTitle.innerHTML=''
i=0
let animationStarted = false

function onEntry(entry) {
  entry.forEach((change) => {
    if(change.isIntersecting && animationStarted==false) {
      titleInterval = setInterval(animate, 100)
      animationStarted=true
    }
  });
}
function animate()
{
  if(i==endTitleText.length-1){

    cursor.classList.add('cursorAnimation')
    clearInterval(titleInterval)
  }
    
  tempText = tempText+endTitleText[i]
  endTitle.innerHTML = tempText
  i++
}
let observer = new IntersectionObserver(onEntry, {threshold: [0.7]});

observer.observe(ending)