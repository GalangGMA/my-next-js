import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { StatusBadge } from "@/components/shared/status-badge";

describe("StatusBadge", () => {
  it("renders the requested status label", () => {
    render(<StatusBadge tone="Completed" />);

    expect(screen.getByText("Completed")).toBeDefined();
  });
});
