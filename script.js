const tucan1 = document.querySelector('#tucan1')
const tucan2 = document.querySelector('#tucan2')
const right_tree = document.querySelector('#right_tree')
const left_fern = document.querySelector('#left_fern')

window.addEventListener('scroll', ()=>{
    const windowPosition = window.scrollY
    let distance = windowPosition*0.04 + 'em'
    let rotation = (-windowPosition*0.09)+40 + 'deg'

    tucan1.style.transform = 'translateY('+distance+')'
    tucan2.style.transform = 'rotateZ('+rotation+')'
    right_tree.style.transform = 'translateX('+windowPosition*0.01 + 'em'+') rotateZ(-20deg)'
    left_fern.style.transform = 'translateX('+windowPosition*(-0.01) + 'em'+')'

})