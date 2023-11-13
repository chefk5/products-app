import React from "react";
import { render } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import { ProductsList } from "../components";
import { mockedResponse } from "../services/constants";
// eslint-disable-next-line @typescript-eslint/no-empty-function
const mockNavFunc = jest.fn();
const mockonRetry = jest.fn();

describe("renders Products list", () => {
  it("displays the correct products", () => {
    const { getByText } = render(
      <ProductsList
        products={mockedResponse}
        navigationFunc={mockNavFunc}
        onRetry={mockonRetry}
      />,
    );

    expect(getByText("iPhone 9")).toBeVisible();
    expect(getByText("iPhone X")).toBeVisible();
  });

  it("displays an error message when no products are available", () => {
    const emptyProducts = [];

    const { getByText } = render(
      <ProductsList
        products={emptyProducts}
        navigationFunc={mockNavFunc}
        onRetry={mockonRetry}
      />,
    );

    expect(getByText("No Products available")).toBeVisible();
  });
});
