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
        sidebar_dropdown.style.height = '100vh'
        sidebar_dropdown.style.top = "16vh"
        return sidebar_state = 1
    }
    sidebar_dropdown.style.height = '0px'
    sidebar_dropdown.style.top = "-14vh"
    return sidebar_state = 0
})