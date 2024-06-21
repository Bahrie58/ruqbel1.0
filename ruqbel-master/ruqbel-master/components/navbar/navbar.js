// ===> Navbar START
// hamburger
const hamburger = document.querySelector(".hamburger")
const navbar = document.querySelector(".nav")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("phone");

    if (!hamburger.classList.contains("active")) {
        let containerDropdown = document.querySelectorAll(".container-dropdown")
        containerDropdown.forEach(dropdown => {
            dropdown.classList.remove("active")
        })
    }
})

// icon
function addI() {
    let containerDropdown = document.querySelectorAll(".container-dropdown")
    containerDropdown.forEach(dropdown => {
        let dropdownA = dropdown.querySelector("a")
        if (!dropdownA.querySelector("i")) {
            let newI = document.createElement("i")
            newI.classList.add("bi")
            newI.classList.add("bi-caret-down-fill")
            dropdownA.appendChild(newI)
        }
    })
}

function removeI() {
    let containerDropdown = document.querySelectorAll(".container-dropdown")
    containerDropdown.forEach(dropdown => {
        let dropdownA = dropdown.querySelector("a")
        let icon = dropdownA.querySelector("i.bi-caret-down-fill")
        if (icon) {
            dropdownA.removeChild(icon)
        }
    })
}

function removeDropdown(dropdown) {
    let newDropdown = dropdown.cloneNode(true)
    dropdown.replaceWith(newDropdown)
    return newDropdown
}

function setDropdown() {
    let containerDropdown = document.querySelectorAll(".container-dropdown");
    containerDropdown.forEach(dropdown => {
        dropdown = removeDropdown(dropdown)

        // layar > 768px
        if (window.innerWidth > 768) {
            dropdown.addEventListener("mouseover", () => {
                dropdown.classList.add("active")
            })
            dropdown.addEventListener("mouseout", () => {
                dropdown.classList.remove("active")
            })
            removeI()

            // layar < 768px
        } else {
            dropdown.addEventListener("click", () => {
                dropdown.classList.toggle("active")
            })
            addI()
        }
    })
}

window.addEventListener('resize', setDropdown);
setDropdown()
// ===> Navbar END