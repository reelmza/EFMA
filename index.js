new WOW().init();

const sidebarBtn = document.getElementsByClassName('bar-icon')[0]
const sidebar_dropdown = document.getElementsByClassName('mobile-nav-dropdown')[0]

const searchBtn = document.getElementsByClassName('search-icon')[0]
const searchInput = document.getElementById('site-search')

let sidebar_state = 0
let search_state = 0

sidebarBtn.addEventListener('click', function () {
    console.log('Sidebar Click')
    if (sidebar_state == 0) {
        sidebar_dropdown.style.height = '90vmin'
        sidebar_dropdown.style.top = "16vh"
        return sidebar_state = 1
    }
    sidebar_dropdown.style.height = '0px'
    sidebar_dropdown.style.top = "-14vh"
    return sidebar_state = 0
})

searchBtn.addEventListener('click', function () {
    console.log('Search Click')
    if (search_state == 0) {
        searchInput.style.right = '0'
        searchBtn.style.marginRight = '48vmin'
        return search_state = 1
    }

    searchInput.style.right = null
    searchBtn.style.marginRight = null
    return search_state = 0
})

var swiper = new Swiper('.swiper-container', {
    init: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        dragSize: 10,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
    // loop: true,
    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: true
    // },


    // speed: 500,
    // spaceBetween: 100,
})
