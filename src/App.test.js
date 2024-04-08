// onursahin.net
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ProductCard from "./App";

describe("ProductCard Component Test", () => {
  it("The product card must be rendered successfully", () => {
    render(<ProductCard />);

    expect(screen.getByText("iPhone 15 Pro")).toBeInTheDocument(); 
    expect(screen.getByText("100")).toBeInTheDocument();

    const productImage = screen.getByAltText("iPhone 15 Pro"); 
    expect(productImage).toBeInTheDocument(); 
    expect(productImage.src).toBe(
      "https://onursahin.net/wp-content/uploads/2022/03/images.png"
    );
  });

  it("When the Add Cart button is clicked, the product must be added to the cart.", () => {
    render(<ProductCard />);
    fireEvent.click(screen.getByText("Add Cart"));
    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });

  it("When the Remove Cart button is clicked, the product must be removed from the cart.", () => {
    render(<ProductCard />);
    fireEvent.click(screen.getByText("Add Cart")); 
    fireEvent.click(screen.getByText("Remove Cart"));
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });
});