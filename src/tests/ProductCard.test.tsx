import React from "react";
import { fireEvent, render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import { ProductCard } from "../components";

const mockNavFunc = jest.fn();

describe("renders Products card", () => {
  it("displays the passed props with all detials", () => {
    const { getByTestId } = render(
      <ProductCard
        id={1}
        title={"title"}
        brand={"brand"}
        price={111}
        rating={2.2}
        navigationFunc={mockNavFunc}
        images={[
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        ]}
      />,
    );

    const image = getByTestId("product-image");

    expect(image).not.toBeNull();
    expect(image.props.source[0].uri).toBe(
      "https://i.dummyjson.com/data/products/1/1.jpg",
    );
    expect(screen.getByText("title")).toBeVisible();
    expect(screen.getByText("brand")).toBeVisible();
    expect(screen.getByText("111$")).toBeVisible();
    expect(screen.getByText("2.2")).toBeVisible();
  });

  it("moves to new screen when it is pressed", async () => {
    render(
      <ProductCard
        id={1}
        title={"title"}
        brand={"brand"}
        price={111}
        rating={2.2}
        navigationFunc={mockNavFunc}
        images={[
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        ]}
      />,
    );

    fireEvent.press(screen.getByText("title"));

    expect(mockNavFunc).toHaveBeenCalledTimes(1);
    expect(mockNavFunc).toHaveBeenCalledWith(1);
  });
});
