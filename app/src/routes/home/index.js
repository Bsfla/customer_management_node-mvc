"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/site", ctrl.output.site);
router.get("/api/customers", ctrl.read.customers);

module.exports = router;
