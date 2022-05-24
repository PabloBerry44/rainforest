function Animation()
{
  const tucan1 = document.querySelector('#tucan1')
  const right_tree = document.querySelector('#right_tree')
  const left_fern = document.querySelector('#left_fern')
  const photo = document.querySelector('#photo')
  const parallax = document.querySelector('.parallax')
  
  window.addEventListener('scroll', ()=>{
      const positionY = window.scrollY
      let distance = positionY*0.04 + 'em'
      let rotation = (-positionY*0.09)+40 + 'deg'
  
      tucan1.style.transform = 'translateY('+distance+')'
      right_tree.style.transform = 'translateX(' +positionY*0.01+ 'em) rotateZ(-20deg)'
      left_fern.style.transform = 'translateX(' +positionY*(-0.01)+ 'em)'

      let heig = photo.clientHeight/3
      photo.style.bottom = heig+'px'
      photo.style.transform = 'translateY('+positionY*0.1+'px)'


  })




}








if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)))
{
  Animation()
}