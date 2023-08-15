const id = document.getElementById('id');
const title = document.getElementById('title');
const url = document.getElementById('url');
const price = document.getElementById('price');
const desc = document.getElementById('description');


const urlParams = new URLSearchParams(window.location.search);
const proID = urlParams.get('productID');

if (title) {
    axios.get(`/admin/add-product?productID=${proID}`)
      .then((response) => {  
        const result = response.data;
        console.log(result[0]);
        
        id.value = result[0].id;
        title.value = result[0].title;
        url.value = result[0].imageurl;
        price.value = result[0].price;
        desc.value = result[0].description;
      })
      .catch(err => console.log('Error while fetching data ', err));
  }
  
axios.get('/admin/admin-product')
.then(response => {
    const data = response.data; // This assumes your API returns an array of objects
    const adminList = document.getElementById('admin-list');
    const shopList = document.getElementById('shop-list');

    if(adminList){
        data.forEach(element => {
            const div2 = document.createElement('div');
            div2.style.maxWidth = "18rem";
            div2.style.maxHeight = "30rem";
            div2.classList.add("card");
            div2.innerHTML = `          
                <img class="card-img-top h-50" src="${element.imageurl}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.description}</p>
                <h3 class="card-text font-weight-bold">$ ${element.price}</h3>
                <div class="d-flex justify-content-around"><a href="delete/${element.id}"  class="details btn btn-primary">Delete</a><a href="products/${element.id}"  class="update btn btn-secondary">Update</a></div>
                </div>
            `;
            adminList.appendChild(div2);
        });
    }else if(shopList){                
        data.forEach(element => {
            const div1 = document.createElement('div');
            div1.style.maxWidth = "18rem";
            div1.style.maxHeight = "30rem";
            div1.classList.add("card");
            div1.innerHTML = `          
                <img class="card-img-top h-50" src="${element.imageurl}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.description}</p>
                <h3 class="card-text font-weight-bold">$ ${element.price}</h3>
                <div class="d-flex justify-content-around"><a href="details/${element.id}"  class="details btn btn-primary">Details</a><a href="cart/${element.id}" class="update btn btn-secondary">Add to cart</a></div>
                </div>
            `;
            shopList.appendChild(div1);
        });
    }


}) 
.catch(error => console.log(error));