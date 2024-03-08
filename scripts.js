async function asynchronous() {
  try {
    const apiUrl = "https://fakestoreapi.com/products";
    const response = await fetch(apiUrl, {
      method: 'GET'
    })

    if (!response.ok) {
      throw new Error(`Error fetching data ${response.status}`);
    }

    const data = await response.json();

    const container = document.querySelector(".pro-max");
    const container1 = document.querySelector(".pro-max1");

    container.innerHTML = '';
    container1.innerHTML = '';

    data.forEach(product => {
      const { title, description, image } = product;

      const productTitle = document.createElement('h2');
      productTitle.textContent = title;
      
      const productDescription = document.createElement('p');
      productDescription.textContent = description;

    const productImage = document.createElement('img');
      productImage.src = image;
      productImage.classList.add('img'); 

      container.appendChild(productTitle);
      container1.appendChild(productDescription);
      container1.appendChild(productImage);
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

asynchronous();