import { Router } from "express";

import adapter from "@/main/adapters/express-route-adapter";

export default (router: Router): void => {
  router.get("/something", (req, res) => {
    res.send('a')
  })  
};
