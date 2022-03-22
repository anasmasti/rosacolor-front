import { fetchFakePostes } from "../../services/fake-posts/fetchFakePostes";

describe("Test home comonent", () => {
  it("Should return true", () => {
      expect(fetchFakePostes()).toBe(true)
  });
});
