var allImage = Array.from(document.querySelectorAll(".item img"))
var lightBoxContainer = document.getElementById("lightBoxContainer")
var lightBox = document.getElementById("lightBox")
var closeBtn = document.getElementById("closeBtn")
var prevBtn = document.getElementById("prevBtn")
var nextBtn = document.getElementById("nextBtn")
var currentIndex


for (var i = 0; i < allImage.length; i++) {
    allImage[i].addEventListener(`click`, function(e) {
        currentIndex = allImage.indexOf(e.target)
        lightBoxContainer.classList.replace("d-none", "d-flex")
        var currentImg = e.target.getAttribute("src")
        lightBox.style.backgroundImage = `url(${currentImg})`

    })
}



closeBtn.addEventListener(`click`, closeImg)
prevBtn.addEventListener(`click`, prevImg)
nextBtn.addEventListener(`click`, nextImg)

function closeImg() {
    lightBoxContainer.classList.replace("d-flex", "d-none")

}

function prevImg() {
    currentIndex--;
    if (currentIndex < 0) currentIndex = allImage.length - 1
    var imgUrl = allImage[currentIndex].getAttribute("src")
    lightBox.style.backgroundImage = `url(${imgUrl})`
}

function nextImg() {
    currentIndex++;
    if (currentIndex >= allImage.length) currentIndex = 0
    var imgUrl = allImage[currentIndex].getAttribute("src")
    lightBox.style.backgroundImage = `url(${imgUrl})`
}


document.addEventListener("keyup", function(e) {
    if (lightBoxContainer.classList.contains("d-flex")) {
        switch (e.key) {
            case `ArrowRight`:
                nextImg();
                break;
            case `ArrowLeft`:
                prevImg();
                break;
            case `Escape`:
                closeImg();
                break;
        }
    }
})