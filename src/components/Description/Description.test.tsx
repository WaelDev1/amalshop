// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Description from "./Description";
import { DescriptionProps } from "./Description.types";

describe("Description Component", () => {
  let props: DescriptionProps;

  beforeEach(() => {
    props = {
      desc: <p>Serious about your casi wear ?
      Don’t sweat it, because our edit of men’s hoodies and sweatshirts features the best cozy layers to keep you snug and stylish.</p>,
      title: <h3>Description</h3>,
      secColor: "green"
    };
  });

  const renderComponent = () => render(<Description {...props} />);

  it("should render description text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Description");

    expect(component).toHaveTextContent("Serious about your casi wear ?");
  });

  it("should render title text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("Title");

    expect(component).toHaveTextContent("Description");
  });
});
