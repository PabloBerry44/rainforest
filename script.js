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
      
      photo.style.transform = 'translateY('+-positionY*0.14+'px)'
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

photo.addEventListener('click', ()=> {window.open('https://www.dailysabah.com/life/environment/deforestation-of-brazils-amazon-rainforest-hits-record-in-april?gallery_image=undefined#big','_blank');})