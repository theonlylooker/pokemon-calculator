import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Layout from "./Layout";

test("rendering the layout of the page", () => {
  const layoutComponent = render(
    <Layout>
      <div></div>
    </Layout>
  );
});
