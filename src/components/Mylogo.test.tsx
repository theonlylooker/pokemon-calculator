import react from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Mylogo from "./Mylogo";

test("Mylogo", () => {
  const component = render(<Mylogo />);
  component.getByAltText("logo of pokemon");
});
