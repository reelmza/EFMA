const sidebar = document.getElementsByClassName('bar-icon')[0]
const sidebar_dropdown = document.getElementsByClassName('mobile-nav-dropdown')[0]

let sidebar_state = 0
sidebar.addEventListener('click', function () {
    console.log('click')
    if (sidebar_state == 0) {
        sidebar_dropdown.style.height = '50vmin'
        sidebar_dropdown.style.opacity = "1"
        return sidebar_state = 1
    }
    sidebar_dropdown.style.height = '0px'
    sidebar_dropdown.style.opacity = "0"
    return sidebar_state = 0
})