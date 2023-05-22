// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import CartIcon from "./CartIcon";
import { CartIconProps } from "./CartIcon.types";

describe("CartIcon component", () => {
  let props: CartIconProps;

  beforeEach(() => {
    props = {
      bgstyle: {
        backgroundColor: "#406A52"
      },
      secColor:"black"

    };
  });

  const renderComponent = () => render(<CartIcon {...props} />);

  it("should render with the correct background color", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("CartIcon");

    expect(component).toHaveStyle(`background-color: ${props.bgstyle.backgroundColor}`);

  });

  it("should render with the correct count", () => {
    const { getByTestId } = renderComponent();
    const component = getByTestId("CartIcon");

    if (props.count !== undefined) {
      expect(component).toHaveTextContent(props.count.toString());
    }
  });
});
