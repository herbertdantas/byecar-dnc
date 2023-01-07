let index = 0

let carouselItems = document.querySelectorAll(".carousel-item")

function next(){
    if (index === carouselItems.length -1){
        index = 0

    }else{
        index++
    }

    carouselItems[index].scrollIntoView({behavior:"smooth"})
}

function goBack(){
    if (index === 0){
        
        index =carouselItems.length -1 
        
    }else{
        index--
    }


    carouselItems[index].scrollIntoView({behavior:"smooth"})
}