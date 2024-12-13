// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { collection, getDocs, getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbKybEvSv_tzqnKOmkyeLjC44n1pwJYlo",
  authDomain: "coar-ccd07.firebaseapp.com",
  projectId: "coar-ccd07",
  storageBucket: "coar-ccd07.firebasestorage.app",
  messagingSenderId: "1000018560014",
  appId: "1:1000018560014:web:209dc0e9ffabb4dad7a85f",
  measurementId: "G-7V0HVZX5G0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Reference to the cakes collection
const cakesCollection = collection(db, 'cakes');

// Target the product grid container in your section
const productGridContainer = document.querySelector('.product-grid');

// Display loading state initially
productGridContainer.innerHTML = `<div class="loading">Loading products...</div>`;

// Fetch cakes data and populate the grid
getDocs(cakesCollection).then((querySnapshot) => {
    if (querySnapshot.empty) {
        productGridContainer.innerHTML = `<div class="no-data">No products available</div>`;
        return;
    }

    let productsHTML = '';
    querySnapshot.forEach((doc) => {
        const product = doc.data(); // Get product data
        productsHTML += `
          <div class="product-box" style="display: flex; flex-direction: column; justify-content: space-between; background-color: #f8f8f8; border-radius: 10px; padding: 20px; text-align: center; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); height: 100%; min-height: 300px;">
              <div>
                  <div class="img">
                      <img src="${product.image || 'images/cake2.png'}" alt="${product.name}" style="max-width: 100%; height: auto; border-radius: 10px;">
                  </div>
                  <div class="product-content">
                      <h3 style="font-size: 1.2rem; margin-top: 10px; color: #333;">${product.name}</h3>
                      <p style="font-size: 1rem; color: #666; margin: 10px 0;">${product.description || 'No description available.'}</p>
                      <p style="font-size: 1.1rem; color: green; margin: 10px 0; font-weight: bold;">Price: ₹${product.price || 'Loading..'} / kg</p>
                  </div>
              </div>
              <div class="orderNow" style="background-color: #e0e0e0; padding: 18px; border-radius: 10px; margin-top: 15px; text-color:black">
                  <button onclick="window.location.href = \`order-now-page.html?productName=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image || 'images/cake2.png')}&description=${encodeURIComponent(product.description || 'No description available.')}\`" 
                          style="padding: 10px 15px; background-color: #e0e0e0; border: none; color: black; font-weight: bold; cursor: pointer; border-radius: 5px; width: 100%;">
                      Order Now
                  </button>
              </div>
          </div>
        `;
      });
      
    
    
    // Inject the products into the grid container
    productGridContainer.innerHTML = productsHTML;
}).catch((error) => {
    console.error("Error fetching cakes: ", error);
    productGridContainer.innerHTML = `<div class="error">Failed to load products. Please try again later.</div>`;
});

// Navbar and search toggle functionality
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick = () => {
    navbar.classList.toggle('active');
};

let search = document.querySelector('.search');
document.querySelector('#search').onclick = () => {
    search.classList.toggle('active');
};


// var swiper = new Swiper(".product-row", {
//     spaceBetween: 30,
//     loop:true,
//     centeredSlides:true,
//     autoplay:{
//         delay:9500,
//         disableOnInteraction:false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       1024: {
//         slidesPerView: 3,
//       },
//     },
//   });
// var swiper = new Swiper(".blogs-row", {
//     spaceBetween: 30,
//     loop:true,
//     centeredSlides:true,
//     autoplay:{
//         delay:9500,
//         disableOnInteraction:false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation:{
//         nextE1 :".swiper-button-next",
//         prevE1 :".swiper-button-prev",
//     },
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 1,
//       },
//       1024: {
//         slidesPerView: 1,
//       },
//     },
//   });

//   var swiper = new Swiper(".review-row", {
//     spaceBetween: 30,
//     loop:true,
//     centeredSlides:true,
//     autoplay:{
//         delay:9500,
//         disableOnInteraction:false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       1024: {
//         slidesPerView: 3,
//       },
//     },
//   });














  /////////////////////////////////////////
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
// import { collection, getDocs, getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// const firebaseConfig = {
  // apiKey: "AIzaSyCbKybEvSv_tzqnKOmkyeLjC44n1pwJYlo",
  // authDomain: "coar-ccd07.firebaseapp.com",
  // projectId: "coar-ccd07",
  // storageBucket: "coar-ccd07.firebasestorage.app",
  // messagingSenderId: "1000018560014",
  // appId: "1:1000018560014:web:209dc0e9ffabb4dad7a85f",
  // measurementId: "G-7V0HVZX5G0",
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// async function fetchCakes() {
//     const productWrapper = document.getElementById('product-wrapper');
//     const loading = document.getElementById('loading');

//     // Check if cakes data is already in localStorage
//     const storedCakes = localStorage.getItem('cakes');
//     const storedTimestamp = localStorage.getItem('cakesTimestamp');

//     if (storedCakes && storedTimestamp) {
//         const cakes = JSON.parse(storedCakes);
//         const timestamp = parseInt(storedTimestamp);
//         const currentTimestamp = Date.now();

//         // If stored data is older than 24 hours, force refresh
//         if (currentTimestamp - timestamp < 24 * 60 * 60 * 1000) {
//             // Show the data from localStorage
//             loading.style.display = 'none';
//             displayCakes(cakes);
//         } else {
//             // Fetch new data
//             loading.style.display = 'block';
//             await fetchAndStoreCakes();
//         }
//     } else {
//         // No data in localStorage, fetch from Firestore
//         loading.style.display = 'block';
//         await fetchAndStoreCakes();
//     }
// }

// async function fetchAndStoreCakes() {
//     const productWrapper = document.getElementById('product-wrapper');
//     const loading = document.getElementById('loading');

//     try {
//         const cakesCollection = collection(db, "cakes");
//         const cakesSnapshot = await getDocs(cakesCollection);

//         if (cakesSnapshot.empty) {
//             loading.innerHTML = <p>No products available</p>;
//             return;
//         }

//         loading.style.display = 'none'; // Hide loading symbol once data is loaded

//         const cakes = [];
//         let latestTimestamp = 0; // To track the most recent timestamp

//         cakesSnapshot.forEach(doc => {
//             const cake = doc.data();
//             cakes.push({ id: doc.id, ...cake });

//             // Compare timestamps for the latest one
//             const cakeTimestamp = cake.timestamp ? cake.timestamp.seconds * 1000 : 0;
//             if (cakeTimestamp > latestTimestamp) {
//                 latestTimestamp = cakeTimestamp;
//             }
//         });

//         // Store the cakes data in localStorage with timestamp
//         localStorage.setItem('cakes', JSON.stringify(cakes));
//         localStorage.setItem('cakesTimestamp', latestTimestamp.toString());

//         displayCakes(cakes);
//         displayProducts(cakes);

//     } catch (error) {
//         console.error("Error fetching cakes: ", error);
//         loading.innerHTML = <p>Failed to load products</p>;
//     }
// }
// // Sample data fetching function (replace with actual data fetching logic)
// // async function fetchProducts() {
// //   // Simulating an API call or Firebase fetch
// //   return new Promise(resolve => {
// //       setTimeout(() => {
// //           resolve([
// //               { id: 1, name: 'Chocolate Cake', description: 'Delicious chocolate cake', imageUrl: 'images/chocolate-cake.jpg' },
// //               { id: 2, name: 'Vanilla Cake', description: 'Tasty vanilla cake', imageUrl: 'images/vanilla-cake.jpg' },
// //               { id: 3, name: 'Strawberry Cake', description: 'Fresh strawberry cake', imageUrl: 'images/strawberry-cake.jpg' },
// //               { id: 4, name: 'Blueberry Cake', description: 'Sweet blueberry cake', imageUrl: 'images/blueberry-cake.jpg' },
// //               { id: 5, name: 'Carrot Cake', description: 'Healthy carrot cake', imageUrl: 'images/carrot-cake.jpg' },
// //               { id: 6, name: 'Lemon Cake', description: 'Tangy lemon cake', imageUrl: 'images/lemon-cake.jpg' },
// //           ]);
// //       }, 2000);  // Simulate a 2-second delay (replace with your actual data source)
// //   });
// // }

// // Function to display products
// // function displayProducts(products) {
// //   const productWrapper = document.getElementById('all-product');
// //   productWrapper.innerHTML = '';  // Clear the loading spinner

// //   products.forEach(product => {
// //       const productCard = 
// //           <div class="box">
// //               <div class="img">
// //                   <img src="${product.imageUrl}" alt="${product.name}">
// //               </div>
// //               <div class="product-content">
// //                   <h3>${product.name}</h3>
// //                   <p>${product.description}</p>
// //                   <div class="orderNow">
// //                       <button onclick="orderProduct(${product.id}, '${product.name}')">Order Now</button>
// //                   </div>
// //               </div>
// //           </div>
// //       ;
// //       productWrapper.innerHTML += productCard;
// //   });
// // }

// // Fetch products and display them
// // async function loadProducts() {
// //   const loadingSpinner = document.getElementById('loading');
// //   loadingSpinner.style.display = 'block';  // Show loading spinner

// //   const products = await fetchProducts();  // Fetch the products (or call your API here)
  
// //   loadingSpinner.style.display = 'none';  // Hide loading spinner after data is fetched
// //   displayProducts(products);  // Display the products in the grid
// // }

// // Call the loadProducts function when the page is ready
// // document.addEventListener('DOMContentLoaded', loadProducts);


// // function displayCakes(cakes) {
// //     const productWrapper = document.getElementById('product-wrapper');

// //     cakes.forEach(cake => {
// //         const cakeCard = 
// //             <div class="swiper-slide box">
// //                 <div class="img">
// //                     <img src="${cake.imageUrl}" alt="${cake.name}">
// //                 </div>
// //                 <div class="product-content">
// //                     <h3>${cake.name}</h3>
// //                     <p>${cake.description}</p>
// //                     <div class="orderNow">
// //                         <button onclick="orderCake('${cake.id}', '${cake.name}')">Order Now</button>
// //                     </div>
// //                 </div>
// //             </div>
// //         ;
// //         productWrapper.innerHTML += cakeCard;
// //     });

//     // Reinitialize Swiper after content is loaded
//     new Swiper(".product-row", {
//         spaceBetween: 30,
//         loop: true,
//         centeredSlides: true,
//         autoplay: {
//             delay: 9500,
//             disableOnInteraction: false,
//         },
//         pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//         },
//         breakpoints: {
//             0: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//         },
//     });


// async function fetchExtraData() {
//     const extraDataWrapper = document.getElementById('extra-data-wrapper');
//     const loading = document.getElementById('loading-extra');

//     // Check if extra data is already in localStorage
//     const storedExtraData = localStorage.getItem('extraData');
//     const storedTimestamp = localStorage.getItem('extraDataTimestamp');

//     if (storedExtraData && storedTimestamp) {
//         const extraData = JSON.parse(storedExtraData);
//         const timestamp = parseInt(storedTimestamp);
//         const currentTimestamp = Date.now();

//         // If stored data is older than 24 hours, force refresh
//         if (currentTimestamp - timestamp < 24 * 60 * 60 * 1000) {
//             loading.style.display = 'none';
//             displayExtraData(extraData);
//         } else {
//             loading.style.display = 'block';
//             await fetchAndStoreExtraData();
//         }
//     } else {
//         loading.style.display = 'block';
//         await fetchAndStoreExtraData();
//     }
// }

// async function fetchAndStoreCakes() {
//     const productWrapper = document.getElementById('product-wrapper');
//     const loading = document.getElementById('loading');

//     try {
//         const cakesCollection = collection(db, "cakes");
//         const cakesSnapshot = await getDocs(cakesCollection);

//         if (cakesSnapshot.empty) {
//             loading.innerHTML = '<p>No products available</p>';
//             return;
//         }

//         loading.style.display = 'none'; // Hide loading symbol once data is loaded

//         const cakes = [];
//         let latestTimestamp = 0; // To track the most recent timestamp

//         cakesSnapshot.forEach(doc => {
//             const cake = doc.data();
//             cakes.push({ id: doc.id,...cake });

//             // Compare timestamps for the latest one
//             const cakeTimestamp = cake.timestamp? cake.timestamp.seconds * 1000 : 0;
//             if (cakeTimestamp > latestTimestamp) {
//                 latestTimestamp = cakeTimestamp;
//             }
//         });

//         // Store the cakes data in localStorage with timestamp
//         localStorage.setItem('cakes', JSON.stringify(cakes));
//         localStorage.setItem('cakesTimestamp', latestTimestamp.toString());

//         displayCakes(cakes);
//         displayProducts(cakes);

//     } catch (error) {
//         console.error("Error fetching cakes: ", error);
//         loading.innerHTML = '<p>Failed to load products</p>';
//     }
// }

// function displayCakes(cakes) {
//     const productWrapper = document.getElementById('product-wrapper');

//     cakes.forEach(cake => {
//         const cakeCard = `
//             <div class="swiper-slide box">
//                 <div class="img">
//                     <img src="${cake.imageUrl}" alt="${cake.name}">
//                 </div>
//                 <div class="product-content">
//                     <h3>${cake.name}</h3>
//                     <p>${cake.description}</p>
//                     <div class="orderNow">
//                         <button onclick="orderCake('${cake.id}', '${cake.name}')">Order Now</button>
//                     </div>
//                 </div>
//             </div>
//         `;
//         productWrapper.innerHTML += cakeCard;
//     });

//     // Reinitialize Swiper after content is loaded
//     new Swiper(".product-row", {
//         spaceBetween: 30,
//         loop: true,
//         centeredSlides: true,
//         autoplay: {
//             delay: 9500,
//             disableOnInteraction: false,
//         },
//         pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//         },
//         breakpoints: {
//             0: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//         },
//     });
// }


// var swiper = new Swiper(".blogs-row", {
//     spaceBetween: 30,
//     loop:true,
//     centeredSlides:true,
//     autoplay:{
//         delay:9500,
//         disableOnInteraction:false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation:{
//         nextE1 :".swiper-button-next",
//         prevE1 :".swiper-button-prev",
//     },
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 1,
//       },
//       1024: {
//         slidesPerView: 1,
//       },
//     },
// });

// var swiper = new Swiper(".review-row", {
//     spaceBetween: 30,
//     loop:true,
//     centeredSlides:true,
//     autoplay:{
//         delay:9500,
//         disableOnInteraction:false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       1024: {
//         slidesPerView: 3,
//       },
//     },
// });




