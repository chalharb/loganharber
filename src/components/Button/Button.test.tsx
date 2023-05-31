import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from ".";

describe("Given the App Component is rendered", () => {
  render(<Button>Hello World</Button>);

  it("should contain 'Hello World'", () => {
    expect(screen.getByText(/Hello World/i)).toBeDefined();
  });
});
