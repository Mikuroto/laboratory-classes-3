const express = require("express");
const { LOGOUT_LINKS } = require("../constants/navigation");

const router = express.Router();

router.get("/", (request, response) => {
  response.render("logout", {
    headTitle: "Shop - Logout",
    menuLinks: LOGOUT_LINKS,
    activeLinkPath: "/logout",
  });
});

module.exports = router;