const btnOneElement = document.getElementById("btn1");

const btnTwoElement = document.getElementById("btn2");

const boxElement = document.querySelector(".box");




// Skiftebaggrundsfarven på body når man klikker på button 2 ved at toggle mellem to klasser (fjerne changeColor class-attribut --> tilføje changeColor class-attribut)
//btnTwoElement.addEventListener("click", function(){
//    document.body.classList.toggle("changeColor");
//});
    

// Skifte boks elementets størrelse med CSS transform ved at toggle mellem to klasser transform -> transform-active
btnOneElement.addEventListener("click", function(){
    boxElement.classList.toggle("transform-active");
});



// Animere boks element ved hjælp css keyframe animation ved at toggle mellem to klasser (fjerne box2 class-attribut --> tilføje box2 class-attribut)
//btnTwoElement.addEventListener("click", function(){
//    boxElement.classList.toggle("box2");
//});


// Animere boks element ved hjælp css keyframe animation som man tilføjer og fjerner
//btnTwoElement.addEventListener("click",function(){
//    
//    if (boxElement.classList.contains("box2")){
//        boxElement.classList.remove("box2");
//       
//    } else {
//        boxElement.classList.add("box2");
//      
//    }
//    
//});


// Animere boks element ved hjælp css keyframe animation som man tilføjer og fjerner
btnTwoElement.addEventListener("click",animate_box);
    
function animate_box(){
    if (boxElement.classList.contains("box2")){
        boxElement.classList.remove("box2");
       
    } else {
        boxElement.classList.add("box2");
      
    }
}



//let animation_is_displayed = false ;
//
//btnTwoElement.addEventListener("click", animate_box);
//
//
//function animate_box()
//{
//  boxElement = document.querySelector(".box");
//  if (!animation_is_displayed) {
//    boxElement.classList.add("box2");
//    animation_is_displayed = true ;
//  }
//  else {
//    boxElement.classList.remove("box2");
//    animation_is_displayed = false ;
//  }
//}




