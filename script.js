/* ========================================
   THIRUMALA SELECTIONS
   Women's Festival Collection
   Main JavaScript File
   ======================================== */


/* ========================================
   IMAGE VIEW
   ======================================== */

function openImage(imageSrc) {
    window.open(imageSrc, "_blank");
}


/* ========================================
   PRODUCT DETAILS
   ======================================== */

let selectedProduct = {
    name: "",
    design: "",
    fabric: "",
    work: "",
    sizes: "",
    image: ""
};


function openProduct(name, design, fabric, work, sizes, image) {

    selectedProduct = {
        name: name,
        design: design,
        fabric: fabric,
        work: work,
        sizes: sizes,
        image: image
    };

    document.getElementById("modalName").textContent = name;
    document.getElementById("modalDesign").textContent = design;
    document.getElementById("modalFabric").textContent = fabric;
    document.getElementById("modalWork").textContent = work;
    document.getElementById("modalSizes").textContent = sizes;

    const modalImage = document.getElementById("modalImage");

    modalImage.src = image;
    modalImage.alt = name;

    document.getElementById("productModal").classList.add("active");

    document.body.style.overflow = "hidden";
}


/* ========================================
   CLOSE PRODUCT DETAILS
   ======================================== */

function closeProduct() {

    document.getElementById("productModal").classList.remove("active");

    document.body.style.overflow = "";
}


/* ========================================
   ORDER ON WHATSAPP
   ======================================== */

function orderOnWhatsApp() {

    /*
        IMPORTANT:
        Replace the number below with the Thirumala
        WhatsApp number.

        Country code for India = 91

        Example:
        919876543210
    */

    const whatsappNumber = "917780633068";


    const message =
        "Hello Thirumala Selections,%0A%0A" +
        "I am interested in this product:%0A%0A" +
        "Product: " + selectedProduct.name + "%0A" +
        "Design: " + selectedProduct.design + "%0A" +
        "Fabric: " + selectedProduct.fabric + "%0A" +
        "Work / Type: " + selectedProduct.work + "%0A" +
        "Available Sizes: " + selectedProduct.sizes + "%0A%0A" +
        "Please provide availability and order details.";


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        message;


    window.open(whatsappURL, "_blank");
}


/* ========================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
   ======================================== */

document.getElementById("productModal").addEventListener("click", function(event) {

    if (event.target === this) {
        closeProduct();
    }

});


/* ========================================
   CLOSE MODAL WITH ESCAPE KEY
   ======================================== */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeProduct();
    }

});