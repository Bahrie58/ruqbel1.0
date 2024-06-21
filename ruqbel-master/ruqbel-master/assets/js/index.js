// ===> Main START
// landing-page 

// offset scroll
function scrollTarget(id) {
    let targetId = document.getElementById(id);
    if (targetId) {
        let offset = 200
        let bodyRect = document.body.getBoundingClientRect().top
        let targetIdRect = targetId.getBoundingClientRect().top
        let targetIdPosition = targetIdRect - bodyRect
        let offsetPosition = targetIdPosition - offset

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
    }
}


// First-page
// carousel
let carouselIndex = 0;

let description = document.querySelectorAll(".first-page .child-about")
description[0].style.display = "block"

function carousel(value) {
    const cards = document.querySelectorAll('.container-carousel .bg-img')
    const totalCards = cards.length

    carouselIndex += value

    if (carouselIndex < 0) {
        carouselIndex = totalCards - 1
    } else if (carouselIndex >= totalCards) {
        carouselIndex = 0
    }

    cards.forEach((card, index) => {
        card.style.transform = `translateX(-${carouselIndex * 100}%)`
    })

    let description = document.querySelectorAll(".first-page .child-about")
    description[0].style.display = "block"
    
    description.forEach((desc, index) => {
        if (index === carouselIndex) {
            desc.style.display = "block"
        } else {
            desc.style.display = "none"
        }
    })
}
// carousel end

// carousel
let carouselIndexNews = 0

function carouselNews(value) {
    const cards = document.querySelectorAll('.container-carousel-news .news')
    const totalCards = cards.length

    carouselIndexNews += value

    if (carouselIndexNews < 0) {
        carouselIndexNews = totalCards - 1
    } else if (carouselIndexNews >= totalCards) {
        carouselIndexNews = 0
    }

    cards.forEach((card, index) => {
        card.style.transform = `translateX(-${carouselIndexNews * 100}%)`
    })
}
// carousel end


// background image
// function preventScroll(event) {
//     event.preventDefault();
//     event.stopPropagation();

//     return false;
// }

let firstPage = document.querySelector(".first-page")
let containerImg = firstPage.querySelector('.container-img')
let bgImages = firstPage.querySelectorAll(".bg-img")

bgImages.forEach(bgImg => {
    bgImg.addEventListener("click", () => {
        let img_src = bgImg.querySelector("img").src
        let newDiv = document.createElement('div')
        let newImg = document.createElement('img')
        let newI = document.createElement("i")
        newI.classList.add("bi", "bi-x-lg")

        newImg.src = img_src
        newImg.alt = "Selected Image"
        newDiv.appendChild(newI)
        newDiv.appendChild(newImg)
        containerImg.appendChild(newDiv)
        containerImg.classList.add("active")

        // window.addEventListener('scroll', preventScroll, { passive: false });

        newI.addEventListener("click", () => {
            containerImg.innerHTML = ''
            containerImg.classList.remove("active")
            // window.removeEventListener('scroll', preventScroll, { passive: false });
        })
    })
})


// format text judul & deskripsi
function formatText(text, maximum = 50) {
    if (text.length > maximum) {
        text = text.substring(0, maximum) + '...'
    }
    return text
}

let cardNews = document.querySelectorAll(".news")
cardNews.forEach(news => {
    let h2 = news.querySelector('h2')
    let p = news.querySelector('p')

    h2.innerHTML = formatText(h2.innerHTML)
    p.innerHTML = formatText(p.innerHTML, 120)
})
// ===> Main END

