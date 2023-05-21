import React from "react";
import { render } from "@testing-library/react";
import ProductName from "./ProductName";
import { ProductNameProps } from "./ProductName.types";

describe("ProductName", () => {
  let props: ProductNameProps;

  beforeEach(() => {
    props = {
      title: "product title",
      reference: "205/245/10",
      price: "119",
      primaryColor: "black",
      secondaryColor:"green",
      details:false,
    };
  });

  const renderComponent = () => render(<ProductName {...props} />);

  it("should render the correct title", () => {
    const { getByTestId } = renderComponent();
    const title = getByTestId("product-name-title");
    expect(title).toHaveTextContent("product title");
  });

  it("should render the correct reference", () => {
    const { getByTestId } = renderComponent();
    const reference = getByTestId("product-name-reference");
    expect(reference).toHaveTextContent("205/245/10");
  });

  it("should render the correct price", () => {
    const { getByTestId } = renderComponent();
    const price = getByTestId("product-name-price");
    expect(price).toHaveTextContent("119");
  });

  it("should render the correct color", () => {
    const { getByTestId } = renderComponent();
    const color = getByTestId("product-name-color");
    expect(color).toHaveTextContent("black");
  });

  it("should render the promotion if provided", () => {
    props.promotion = 80;
    const { getByTestId } = renderComponent();
    const promotion = getByTestId("product-name-promotion");
    expect(promotion).toHaveTextContent("80");
  });
});
