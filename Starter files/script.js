"use strict";
/**
 *This HTML structure is given, required to generate this structure by using
  createElement , appendChild & createDocumentFragment methods,
  not by innerHTML method(important)
*/

// `<div id=product-id-${id} class="item" data-title=${title} data-img=${thumbnail} data-price=${price}>
//     <img width="220" src=${thumbnail} alt="">
//     <div class="details">
//       <h3>${title}</h3>
//       <p>${description}</p>
//       <div class="price-quantity">
//         <h2>$ ${price} </h2>
//         <div class="buttons">
//           <i class="fa-solid fa-minus"></i>
//           <div id=${id} class="quantity">${
//       search.itemQuantity === undefined ? 0 : search.itemQuantity
//     }</div>
//           <i class="fa-solid fa-plus"></i>
//         </div>
//       </div>
//     </div>
// </div>`;

// API URL
const requestURL = "https://dummyjson.com/products";

