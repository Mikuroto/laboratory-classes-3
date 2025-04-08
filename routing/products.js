const { STATUS_CODE } = require("../constants/statusCode");
const express = require("express");
const { MENU_LINKS } = require("../constants/navigation");
const { productsSlice } = require("../store/products");

const router = express.Router();

router.get("/", (request, response) => {
  response.render("products", {
    headTitle: "Shop - Products",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products",
    products: productsSlice.products,
  });
});

router.get("/add", (request, response) => {
  response.render("add-product", {
    headTitle: "Shop - Add product",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products/add",
  });
});

router.post("/add", (request, response) => {
  const { name, description } = request.body;
  const newProduct = { name, description };

  productsSlice.newestProduct = newProduct;
  productsSlice.products.push(newProduct);

  response.status(STATUS_CODE.FOUND).redirect("/products/new");
});

router.get("/new", (request, response) => {
  response.render("new-product", {
    headTitle: "Shop - Newest product",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products/new",
    newestProduct: productsSlice.newestProduct,
  });
});

module.exports = router;