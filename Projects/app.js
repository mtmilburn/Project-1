const images = document.querySelectorAll(".carousel-images .images");
console.log(images)
let currentImgIndex = 0
/* Next button */
let next = document.getElementById("nextbtn")
next.addEventListener('click', () => {
    // The image being displayed currently will now become the previous image
    previousImgIndex = currentImgIndex
    // The next image in the carousel will now become the current image
    currentImgIndex++
    console.log(currentImgIndex)

    // Loop back to the beginning when on the last image
    if (currentImgIndex >= images.length) {
        console.log('Too high of an index! Going to reset to 0!')
        currentImgIndex = 0;
    }

    // Hide the current image (which is now the previous image)
    
    images[previousImgIndex].style.display = 'none'
    // Display the next image (which is now the current image)
    images[currentImgIndex].style.display = 'block'
})



/* Prev button*/
let prev = document.getElementById("prevbtn")
prev.addEventListener('click', () => {
    // The current image will become the previous image
    previousImgIndex = currentImgIndex
    // The previous image will now become the current image
    currentImgIndex--
    console.log(currentImgIndex)

    // Loop back to the beginning
    if (currentImgIndex < 0) {
        console.log('Too low of an index! Going to reset to 4!')
        currentImgIndex = images.length - 1;
    }

    // Hide the current image (which is now the previous image)
    images[previousImgIndex].style.display = 'none'
    // Display the next image (which is now the current image)
    images[currentImgIndex].style.display = 'block'
})