const el = document.querySelector('.el')
const om = document.querySelector('.onglets')
const pi = document.querySelector('.pi')


el.addEventListener('click', () =>{
    om.classList.add('act')

})


pi.addEventListener('click', () =>{
    om.classList.remove('act')
    
})