import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id:1,
      foodName:"panner Grilled Sandwitch",
      foodDetails:"pan-fried masala panner.",
      foodprice:200,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Biriyani_bohvze"
    },
    {
      id:2,
      foodName:"panner Grilled Sandwitch",
      foodDetails:"pan-fried masala panner.",
      foodprice:200,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NorthIndian_u554zm"
    },
    {
      id:3,
      foodName:"panner Grilled Sandwitch",
      foodDetails:"pan-fried masala panner.",
      foodprice:200,
      foodImg:"https://bsmedia.business-standard.com/_media/bs/img/article/2020-05/22/full/1590093078-9903.jpg"
    },
    {
      id:4,
      foodName:"panner Grilled Sandwitch",
      foodDetails:"pan-fried masala panner.",
      foodprice:200,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Biriyani_bohvze"
    },
    {
      id:5,
      foodName:"panner Grilled Sandwitch",
      foodDetails:"pan-fried masala panner.",
      foodprice:200,
      foodImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQ1d5RSMDOdjD32sMIr78qRO8CBLi_a1z5A&usqp=CAU"
    },
    {
      id:6,
      foodName:"panner Grilled Sandwitch",
      foodDetails:"pan-fried masala panner.",
      foodprice:200,
      foodImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzm2NZPTqTCFzdXKdsc6AnYlvLPOqcCcHmDQ&usqp=CAU"
    },
    {
      id:7,
      foodName:"panner Grilled Sandwitch",
      foodDetails:"pan-fried masala panner.",
      foodprice:200,
      foodImg:"https://www.cityshor.com/uploads/article/12_2017/1512138375_1.jpg"
    },
  ]
}
