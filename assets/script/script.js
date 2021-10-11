let dropdown = document.querySelector('.disDropdown')
let hometab = document.querySelector('#home-tab')
let currentTab = document.getElementById('work')
let dropdownMenu = document.getElementById('dropdown-menu')
let profileTab = document.getElementById("profile-tab")

dropdown.addEventListener("click", changeDropDown)
hometab.addEventListener("click", changeDropDownBack)


function changeDropDown() {
    if (!currentTab.classList.contains('active')) {
        if(dropdown.getAttribute('data-bs-toggle') === 'tab'){
            dropdown.removeAttribute('data-bs-toggle')
            dropdown.setAttribute('data-bs-toggle', 'dropdown')
        }
    }
}

function changeDropDownBack() {
    if (currentTab.classList.contains('active')) {
        if(dropdown.getAttribute('data-bs-toggle') === 'dropdown'){
            dropdown.removeAttribute('data-bs-toggle')
            dropdown.setAttribute('data-bs-toggle', 'tab')
            profileTab.classList.remove('show')

            while(dropdownMenu.attributes.length > 0) {
                dropdownMenu.removeAttribute(dropdownMenu.attributes[0].name)
            }

            dropdownMenu.setAttribute('class', 'dropdown-menu')
            dropdownMenu.setAttribute('id', 'dropdown-menu')
            dropdown.setAttribute('aria-expanded', 'false')
        }
    }
}

