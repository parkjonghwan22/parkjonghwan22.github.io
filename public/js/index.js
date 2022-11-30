const gnb_list1 = document.querySelector('#gnb_list1')
const gnb_list2 = document.querySelector('#gnb_list2')
const gnb_list3 = document.querySelector('#gnb_list3')
const gnb_list4 = document.querySelector('#gnb_list4')
const gnb_list5 = document.querySelector('#gnb_list5')
const gnb_list6 = document.querySelector('#gnb_list6')
const gnb_list7 = document.querySelector('#gnb_list7')
const gnb_list8 = document.querySelector('#gnb_list8')
const gnb_list9 = document.querySelector('#gnb_list9')
const gnb_list10 = document.querySelector('#gnb_list10')
const gnb_list11 = document.querySelector('#gnb_list11')

gnb_list1.addEventListener('mouseover', function(){
    gnb_list1.classList.add('on')
})

gnb_list1.addEventListener('mouseout', function(){
    gnb_list1.classList.remove('on')
})

gnb_list2.addEventListener('mouseover', function(){
    gnb_list2.classList.add('on')
})

gnb_list2.addEventListener('mouseout', function(){
    gnb_list2.classList.remove('on')
})

gnb_list3.addEventListener('mouseover', function(){
    gnb_list3.classList.add('on')
})

gnb_list3.addEventListener('mouseout', function(){
    gnb_list3.classList.remove('on')
})

gnb_list4.addEventListener('mouseover', function(){
    gnb_list4.classList.add('on')
})

gnb_list4.addEventListener('mouseout', function(){
    gnb_list4.classList.remove('on')
})

gnb_list5.addEventListener('mouseover', function(){
    gnb_list5.classList.add('on')
})

gnb_list5.addEventListener('mouseout', function(){
    gnb_list5.classList.remove('on')
})

gnb_list6.addEventListener('mouseover', function(){
    gnb_list6.classList.add('on')
})

gnb_list6.addEventListener('mouseout', function(){
    gnb_list6.classList.remove('on')
})

gnb_list7.addEventListener('mouseover', function(){
    gnb_list7.classList.add('on')
})

gnb_list7.addEventListener('mouseout', function(){
    gnb_list7.classList.remove('on')
})

gnb_list8.addEventListener('mouseover', function(){
    gnb_list8.classList.add('on')
})

gnb_list8.addEventListener('mouseout', function(){
    gnb_list8.classList.remove('on')
})

gnb_list9.addEventListener('mouseover', function(){
    gnb_list9.classList.add('on')
})

gnb_list9.addEventListener('mouseout', function(){
    gnb_list9.classList.remove('on')
})

gnb_list10.addEventListener('mouseover', function(){
    gnb_list10.classList.add('on')
})

gnb_list10.addEventListener('mouseout', function(){
    gnb_list10.classList.remove('on')
})

gnb_list11.addEventListener('mouseover', function(){
    gnb_list11.classList.add('on')
})

gnb_list11.addEventListener('mouseout', function(){
    gnb_list11.classList.remove('on')
})


const active = document.querySelectorAll('#active > div')
console.log(active)

let count = 0

function slide(){
    const pre1 = function(){
        if(count === 0) {
            return active.length - 1 
        } else {
            return count - 1
        }
    }
    let pre = pre1()
    active[count].className = "on"
    active[pre].className = '' 

    if(++count === active.length)
    count = 0
    
}

setInterval(slide,10000)

const prevbutton = document.querySelector('.prev_button')
const nextbutton = document.querySelector('.next_button')


prevbutton.addEventListener('click', slide)
nextbutton.addEventListener('click', slide)


const tapCon1 = document.querySelector('#tapCon1')
const tapCon2 = document.querySelector('#tapCon2')
const tapNav1 = document.querySelector('#tapNav1')
const tapNav2 = document.querySelector('#tapNav2')

tapNav1.addEventListener('click', function(){
    tapCon1.className = 'on'
    tapCon2.className = ''
})
tapNav2.addEventListener('click', function(){
    tapCon1.className = ''
    tapCon2.className = 'on'
})

