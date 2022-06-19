let dropdownIsOpen = false
const handleClick = ()=>{
    if (!dropdownIsOpen){
        document.querySelector('.menu-toggle').classList.remove("is-active")
        document.querySelector('.nav').classList.remove('mobile-nav')
        dropdownIsOpen = true
    }
    else{
        document.querySelector('.menu-toggle').classList.add("is-active")
        document.querySelector('.nav').classList.add('mobile-nav')
        dropdownIsOpen = false
    }
   
}

  document.querySelector('.menu-toggle').addEventListener('click',handleClick)