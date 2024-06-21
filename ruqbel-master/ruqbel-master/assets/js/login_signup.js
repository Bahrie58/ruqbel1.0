let eyes = document.querySelectorAll('.input i')
let show = document.querySelectorAll('input[type="password"]')

// password to text
eyes.forEach((eye, index)=> {
    eye.addEventListener('click', () => {
        eye.classList.toggle('active')

        if (show[index].type === "password") {
            show[index].type = "text"
        } else {
            show[index].type = "password"
        }
    })
})

function notif(word) {
    let notif = document.querySelector(".notif")
    let p = document.createElement("p")

    notif.classList.add("active")
    p.innerHTML = word
    notif.appendChild(p)

    setTimeout(() => {
        notif.classList.remove("active")
        location.href='../index.html'
    }, 4500)
}