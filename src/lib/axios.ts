import axios from "axios";

export const ckAxios = axios.create({
  headers: {
    authority: "app.convertkit.com",
    path: "/forms/2242795/subscriptions",
    scheme: "https",
    "content-type": "application/x-www-form-urlencoded",
  },
});
