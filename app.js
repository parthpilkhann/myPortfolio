
const saluteTextContainer = document.querySelector(".saluteTextContainer")
const arrowContainer = document.querySelector(".arrowContainer")
const authorName = document.querySelector(".authorName")
const title1 = document.querySelector(".title1")
const title2 = document.querySelector(".title2")
const nameContainer = document.querySelector(".nameContainer")
const title1Container = document.querySelector(".title1Container")
const title2Container = document.querySelector(".title2Container")
const projectsTitle = document.querySelector(".projectsTitle")
const laptop = document.querySelectorAll(".laptop")
const projectDetail = document.querySelectorAll(".projectDetail")


window.addEventListener("scroll", () => {
    let offSetY = window.scrollY;
    if (screen.width <= 415) {
        saluteTextContainer.style.transform = `translate(-${offSetY * 0.3}px, ${offSetY * 0.6}px)`
        arrowContainer.style.transform = `translateY(${offSetY * 0.6}px)`
        authorName.style.transform = `translateX(${offSetY * 0.2}px)`
        title1.style.transform = `translateX(calc(100vw - ${offSetY * 0.2}px))`
        title2.style.transform = `translateX(calc(${offSetY * 0.2}px - 100vw))`
        nameContainer.style.backgroundPositionY = `${offSetY * 0.5}px`
        title1Container.style.backgroundPositionY = `-${offSetY * 0.5}px`
        title2Container.style.backgroundPositionY = `${offSetY * 0.5}px`
        projectsTitle.style.transform = `translateY(calc(400vh - ${offSetY * 1.1}px))`
        laptop[0].style.transform = `translateX(calc(450vh - ${offSetY}px))`
        laptop[1].style.transform = `translateX(calc(${offSetY}px - 590vh))`
    }
    else {
        let offSetY = window.scrollY;
        saluteTextContainer.style.transform = `translate(-${offSetY * 0.3}px, ${offSetY * 0.6}px)`
        arrowContainer.style.transform = `translateY(${offSetY * 0.6}px)`
        authorName.style.transform = `translate(${offSetY * 0.2}px, calc(${offSetY * 0.2}px - 80px))`
        title1.style.transform = `translate(calc(60vw - ${offSetY * 0.5}px), calc(${offSetY * 0.2}px - 220px))`
        title2.style.transform = `translate(calc(${offSetY * 0.5}px - 50vw), calc(${offSetY * 0.2}px - 350px))`
        nameContainer.style.backgroundPositionY = `${offSetY * 0.5}px`
        title1Container.style.backgroundPositionY = `-${offSetY * 0.5}px`
        title2Container.style.backgroundPositionY = `${offSetY * 0.5}px`
        projectsTitle.style.transform = `translateY(calc(400vh - ${offSetY}px))`
        laptop[0].style.transform = `translateX(calc(450vh - ${offSetY}px))`
        laptop[1].style.transform = `translateX(calc(${offSetY}px - 590vh))`
    }
})
