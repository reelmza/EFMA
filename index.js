new WOW().init();

const sidebarBtn = document.getElementsByClassName('bar-icon')[0]
const sidebar_dropdown = document.getElementsByClassName('mobile-nav-dropdown')[0]

let sidebar_state = 0

sidebarBtn.addEventListener('click', function (e) {
    e.preventDefault()
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

document.querySelector(".toggle-button").addEventListener("click", function (e) {
    e.preventDefault()
    return document.querySelector(":root").classList.toggle("dark")
})