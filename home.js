
const sellForm = document.getElementById('sellForm');

sellForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);
    const productImage = document.getElementById('productImage').files[0];

    // Validate input (you can add more validation logic here)

    // Handle form submission (e.g., send data to server or store locally)
    console.log('Product Name:', productName);
    console.log('Description:', productDescription);
    console.log('Price:', productPrice);
    console.log('Image:', productImage.name);
});
