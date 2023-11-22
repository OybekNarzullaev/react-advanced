import { lazy } from "react";

const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        // @ts-ignore
        resolve(import("./AboutPage"));
      }, 1500);
    })
);

export default AboutPageAsync;
