let overlay= document.querySelector(".galleryOverlay");
    let imgBox = document.querySelector(".imgBox");
    var image = document.querySelector(".imgBox img");
    let close = document.querySelector(".imgBox span")

    let gallery = document.querySelector("#gallery")
    gallery.addEventListener("click", (event)=>{
        let currentImagePath = event.target.src;

        if(currentImagePath!==undefined){
        overlay.classList.add('galleryOverlayShow')
        imgBox.classList.add('imgBoxShow')
        image.src=currentImagePath;

        console.log(currentImagePath)
        }
        
    })

    close.addEventListener("click", ()=>{
        overlay.classList.remove('galleryOverlayShow')
        imgBox.classList.remove('imgBoxShow')
    })