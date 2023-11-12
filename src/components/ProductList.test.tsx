import React from "react";
import { fireEvent, render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import ProductsList from "./ProductsList";
// eslint-disable-next-line @typescript-eslint/no-empty-function
const mockNavFunc = jest.fn((id) => {});
const mockonRetry = jest.fn();

describe("renders Products list", () => {
  it("displays the correct products", () => {
    const products = [
      {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        ],
      },
      {
        id: 2,
        title: "iPhone X",
        description:
          "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/2/1.jpg",
          "https://i.dummyjson.com/data/products/2/2.jpg",
          "https://i.dummyjson.com/data/products/2/3.jpg",
          "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        ],
      },
    ];
    const { getByText } = render(
      <ProductsList
        products={products}
        navigationFunc={mockNavFunc}
        onRetry={mockonRetry}
      />,
    );

    expect(getByText("iPhone 9")).toBeVisible();
    expect(getByText("iPhone X")).toBeVisible();
  });

  it("renders without crashing when no products and shows a message", () => {
    const emptyProducts = [];

    const { getByText } = render(
      <ProductsList
        products={emptyProducts}
        navigationFunc={mockNavFunc}
        onRetry={mockonRetry}
      />,
    );

    // Check for a text or component that indicates the absence of products
    expect(getByText("No Products available")).toBeVisible();
  });
});
