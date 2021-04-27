var birdimages = document.querySelectorAll("#birds-gallery figure");
for(i=0; i<birdimages.length; i++) {
    birdimages[i].addEventListener('click', function() {
        this.classList.toggle("expanded"); birds-gallery.classList.toggle("full")
    });
}