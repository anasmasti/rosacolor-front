import { render } from "@testing-library/react";
import Home from "../pages/home/home.jsx";

describe("Test home comonent", () => {
  it("Home component should return welcome te", async () => {
    const { getByText } = render(<Home />);
    expect(getByText("Welcome to")).not.toBeNull();
  });
});
