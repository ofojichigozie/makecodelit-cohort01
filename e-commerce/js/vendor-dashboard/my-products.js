const productsContainerElem = document.getElementById("productsContainer");

async function deleteProduct(productId) {
  const answer = confirm("Do you really wanna delete this product?");

  if (!answer) {
    return; // Early return
  }

  // The codes in comment below do thesame thing:
  // "https://fakestoreapi.com/products/" + productId = String Concatenation
  // `https://fakestoreapi.com/products/${productId}` = STring Interpolation

  try {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`, {
      method: "DELETE"
    });

    if (response.ok) {
      alert("The product was deleted successfully");
      window.location.reload();
    } else {
      alert("Error deleting product. Please try again!");
    }
  } catch (error) {
    console.error("An error occured", error);
  }
}

async function getAndDisplayProducts() {
  try {
    // Making API request to get products
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      console.error("We could not fetch the product");
      return;
    }

    const products = await response.json();

    // Getting the length (size) of the products array
    const productsLength = products.length;

    // Looping to display each product on the UI
    for (let index = 0; index < productsLength; index++) {
      const currentProduct = products[index];

      const itemContainerElem = document.createElement("div");
      itemContainerElem.classList.add("itemContainer");
      itemContainerElem.innerHTML = `
        <img src="${currentProduct.image}" class="itemImage"/>
        <h3 class="itemTitle">${currentProduct.title}</h3>
        <p class="itemDesc">${currentProduct.description}</p>
        <h2 class="itemPrice">${currentProduct.price}</h2>
        <div>
          <a href="edit-product.html?id=${currentProduct.id}">Edit Product</a>
          <button onclick="deleteProduct(${currentProduct.id})">Delete Product</button>
        </div>
      `;
      productsContainerElem.appendChild(itemContainerElem);
    }
  } catch (error) {
    console.error(error);
  }
}

getAndDisplayProducts();
