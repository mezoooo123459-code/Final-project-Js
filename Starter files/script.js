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

const requestURL = fetch("https://dummyjson.com/products");

let basket = [];
let totalCartAmount = 0; 

async function getproducts() {    
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    let fragment = document.createDocumentFragment();
    let shopContainer = document.getElementById("shop");
    let cartCounter = document.getElementById("cartAmount"); 
    
    data.products.forEach((product) => {
      let itemdiv = document.createElement("div");
      itemdiv.id = `product-id-${product.id}`;
      itemdiv.className = "item";
      
      let img = document.createElement("img");
      img.width = 220;
      img.src = product.thumbnail; 
      itemdiv.appendChild(img);

      let detailsdiv = document.createElement("div");
      detailsdiv.className = "details";
      
      let h3 = document.createElement("h3");
      h3.textContent = product.title;
      detailsdiv.appendChild(h3);
      
      let p = document.createElement("p");
      p.textContent = product.description;
      detailsdiv.appendChild(p);

      let priceQuantityDiv = document.createElement("div");
      priceQuantityDiv.className = "price-quantity";
      
      let h2 = document.createElement("h2");
      h2.textContent = `$ ${product.price}`;
      
      let buttonsDiv = document.createElement("div");
      buttonsDiv.className = "buttons";

      let minusIcon = document.createElement("i");
      minusIcon.className = "fa-solid fa-minus";
      
      let quantityDiv = document.createElement("div");
      quantityDiv.id = `q-${product.id}`;
      quantityDiv.className = "quantity";
      quantityDiv.textContent = 0; 

      let plusIcon = document.createElement("i");
      plusIcon.className = "fa-solid fa-plus";

      plusIcon.addEventListener("click", () => {
        
        quantityDiv.textContent = Number(quantityDiv.textContent) + 1;
        
      
        totalCartAmount = totalCartAmount + 1;
        cartCounter.textContent = totalCartAmount;
      });

      minusIcon.addEventListener("click", () => {
        if (Number(quantityDiv.textContent) > 0) {
          
          quantityDiv.textContent = Number(quantityDiv.textContent) - 1;
          
        
          totalCartAmount = totalCartAmount - 1;
          cartCounter.textContent = totalCartAmount;
        }
      });

      buttonsDiv.appendChild(minusIcon);
      buttonsDiv.appendChild(quantityDiv);
      buttonsDiv.appendChild(plusIcon);

      priceQuantityDiv.appendChild(h2);
      priceQuantityDiv.appendChild(buttonsDiv);

      detailsdiv.appendChild(priceQuantityDiv);
      itemdiv.appendChild(detailsdiv);
      fragment.appendChild(itemdiv);
    });
    
    shopContainer.appendChild(fragment);
}

getproducts();