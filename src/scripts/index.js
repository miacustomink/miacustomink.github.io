
// var carousels = document.getElementsByClassName('carousel');
// const slideInterval = 3500;

// function Carousel(car)  {
//     this.carousel = car;
//     this.imgs = car.children;
// }

// function moveForward(car) {
//     let pointer = 0;
//     if(car){
//         for (var i = 0; i < car.imgs.length; i++) {
//             if (car.imgs[i].className == 'visible') {
//                 car.imgs[i].className = 'hidden';
//                 pointer = i;
//             }
//         }
//         if (pointer === undefined || ++pointer == car.imgs.length) {
//             pointer = 0;
//         }
//         car.imgs[pointer].className = 'visible';

       
//     }
// }

// function startPlayback(carousels) { 
//     let car = new Carousel(carousels[0]);
//     setInterval(moveForward.bind(this,car), slideInterval);
// }
   
// startPlayback(carousels);
