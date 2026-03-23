const titleInputElem = document.getElementById("title");
const priceInputElem = document.getElementById("price");
const descriptionInputElem = document.getElementById("description");
const categoryInputElem = document.getElementById("category");
const imageInputElem = document.getElementById("image");
const editFormElem = document.getElementById("editForm");

// IIFE => Immediately Invoked Function Expression
(async function(){
  const queryParams = new URLSearchParams(window.location.search);
  const productId = queryParams.get("id");

  const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const product = await response.json();

  console.log(product);
})();
