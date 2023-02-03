let time = 5000,
    currentImageIndex=0,
    images = document
                .querySelectorAll("#cartaz img")
    max = images.length;
function nextImage(){
    
    images[currentImageIndex]
        .classList.remove("cartaz")

    currentImageIndex++
    
    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("cartaz")


    }