// find elements
var showPrevButton = document.getElementById('show-prev');
var showNextButton = document.getElementById('show-next');
var slideImages = document.getElementById('slide-img');

//subscribe to events
showPrevButton.addEventListener('click', onShowPrevButtonClick);
showNextButton.addEventListener('click', onShowNextButtonClick);

// create images array
var imagesUrls = [];
imagesUrls.push('https://img2.storyblok.com/filters:quality(70)/f/81332/1920x640/dd6a1d5b22/ukraine-independence-monument-hero-1920x640.jpg');
imagesUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSflorAftqAP9E98WOeyb8KM0SnSb8ogzgmxA&usqp=CAU');
imagesUrls.push('https://whc.unesco.org/uploads/thumbs/activity_1149-384-216-20220520151604.jpg');
imagesUrls.push('https://imageio.forbes.com/i-forbesimg/media/lists/places/ukraine_416x416.jpg?format=jpg&height=416&width=416&fit=bounds');

var currentImagesIndex = 0;
slideImages.src = imagesUrls[currentImagesIndex];
showPrevButton.disabled = true;



//functions deffinitions
function onShowPrevButtonClick() {
    currentImagesIndex--;
    slideImages.src = imagesUrls[currentImagesIndex];
    showNextButton.disabled = false;
    if (currentImagesIndex == 0 ) {
        showPrevButton.disabled = true;
    }
}

function onShowNextButtonClick() {
    currentImagesIndex++;
    slideImages.src = imagesUrls[currentImagesIndex];
    showPrevButton.disabled = false;
    if (currentImagesIndex== (imagesUrls.length - 1) ) {
        showNextButton.disabled = true;
    }
}
