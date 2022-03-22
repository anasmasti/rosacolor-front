import { render, screen, waitFor } from "@testing-library/react";
import Home from "./home.js";

describe("Test home comonent", () => {
  it("Home component should return welcome te", async () => {
    const { getByText } = render(<Home />);
    expect(getByText("Welcome to"));
  });
});
