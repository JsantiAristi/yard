const menuEmail = document.querySelector(".navbar-email");
const destokMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const ProductDetailCloseIcon = document.querySelector(".product-detail-close");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector("#shoppingCartContainer");
const ProductDetailContainer = document.querySelector("#productDetail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
ProductDetailCloseIcon.addEventListener("click",closeProductDetailAside)

function toggleDesktopMenu(event){
    const asideClosed = aside.classList.contains("inactive");
    const ProductDetailClosed = ProductDetailContainer.classList.contains("inactive");
    event.preventDefault();

    if(!asideClosed){
        aside.classList.add("inactive");
    }

    if(!ProductDetailClosed){
        ProductDetailContainer.classList.add("inactive");
    }

    destokMenu.classList.toggle("inactive");
}

function toggleMobileMenu(event){
    const asideClosed = aside.classList.contains("inactive");
    const ProductDetailClosed = ProductDetailContainer.classList.contains("inactive");
    event.preventDefault();

    if(!asideClosed){
        aside.classList.add("inactive");
    }

    if(!ProductDetailClosed){
        ProductDetailContainer.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside(event){
    const mobileMenuClosed = mobileMenu.classList.contains("inactive");
    const desktopMenuClosed = destokMenu.classList.contains("inactive");
    const ProductDetailClosed = ProductDetailContainer.classList.contains("inactive");
    event.preventDefault();

    if(!mobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }

    if(!desktopMenuClosed){
        destokMenu.classList.add("inactive");
    }

    if(!ProductDetailClosed){
        ProductDetailContainer.classList.add("inactive");
    }

    aside.classList.toggle("inactive");
}

function openProductDetailAside(){
    aside.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    destokMenu.classList.add("inactive");

    ProductDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside(){
    ProductDetailContainer.classList.add("inactive");
}

// productos en la pantalla
const productList = [];
const cardsContainer = document.querySelector(".cards-container");
productList.push({
    nombre: "Bike",
    imagen: "./images/logos/bici.jpeg",
    price: "120"
})
productList.push({
    nombre: "Pantalla",
    imagen: "./images/logos/bici.jpeg",
    price: "220"
})
productList.push({
    nombre: "Computador",
    imagen: "./images/logos/bici.jpeg",
    price: "400"
})

function renderProducts(array){
    for (product of array){
        const productCard = document.createElement("div")
        productCard.classList.add("product-card");
    
        const img = document.createElement("img");
        img.setAttribute("src",product.imagen);
        img.addEventListener("click", openProductDetailAside)
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
    
        const productName = document.createElement("p");
        productName.innerText = product.nombre;
    
        productInfoDiv.append(productPrice,productName);
            
        const producInfoFigure = document.createElement("figure");
    
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src","./images/icons/bt_add_to_cart.svg");
    
        producInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv,producInfoFigure);
    
        productCard.append(img,productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);




