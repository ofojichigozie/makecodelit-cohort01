const titleInputElem = document.getElementById("title");
const priceInputElem = document.getElementById("price");
const descriptionInputElem = document.getElementById("description");
const categoryInputElem = document.getElementById("category");
const imageInputElem = document.getElementById("image");
const saveButtonElem = document.getElementById("saveButton");
const editFormElem = document.getElementById("editForm");

const searchParams = new URLSearchParams(window.location.search);
const productId = searchParams.get("id");

// IIFE => Immediately Invoked Function Expression
(async function () {
  if (!productId) {
    return;
  }

  try {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);

    if (!response.ok) {
      return;
    }

    const product = await response.json();

    titleInputElem.value = product.title;
    priceInputElem.value = product.price;
    descriptionInputElem.value = product.description;
    categoryInputElem.value = product.category;
    imageInputElem.value = product.image;
  } catch (e) {
    window.alert("Error fetching product " + e.message);
  }
})();

editFormElem.addEventListener("submit", async function (e) {
  e.preventDefault();

  if (!productId) {
    return;
  }

  let newProductDetails = {};

  const newTitle = titleInputElem.value.trim();
  if (newTitle.length > 0) {
    newProductDetails.title = newTitle;
  }

  const newPrice = priceInputElem.value.trim();
  if (newPrice.length > 0) {
    newProductDetails.price = newPrice;
  }

  const newDescription = descriptionInputElem.value.trim();
  if (newDescription.length > 0) {
    newProductDetails.description = newDescription;
  }

  const newCategory = categoryInputElem.value.trim();
  if (newCategory.length > 0) {
    newProductDetails.category = newCategory;
  }

  const newImage = imageInputElem.value.trim();
  if (newImage.length > 0) {
    newProductDetails.image = newImage;
  }

  saveButtonElem.disabled = true;
  saveButtonElem.classList.add("disabled");
  saveButtonElem.textContent = "Please wait";

  try {
    const response = await fetch(`https://fakestoreapiii.com/products/${productId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProductDetails)
    });

    if (response.ok) {
      window.alert("The product was updated successfully");
      // You can do redirection here
    }
  } catch (e) {
    window.alert("Error updating product - " + e.message);
  } finally {
    saveButtonElem.disabled = false;
    saveButtonElem.classList.remove("disabled");
    saveButtonElem.textContent = "Save Changes";
  }
});
