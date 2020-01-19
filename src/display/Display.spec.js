import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(<Display />);
});

describe("display component", () => {
  test("renders", () => {
    expect(wrapper.queryByText(/locked/i)).toBeInTheDocument();
  });

  test("displays closed if the closed prop is true", () => {
    const wrapper = rtl.render(<Display closed={true} />);
    expect(wrapper.queryByText(/Closed/)).toBeInTheDocument();
  });

  test("displays Locked if the locked prop is true", () => {
    const wrapper = rtl.render(<Display closed={true} locked={true} />);
    expect(wrapper.queryByText(/Locked/)).toBeInTheDocument();
  });

  test("when closed or locked use the red-led class", () => {
    const wrapper = rtl.render(<Display closed={true} locked={true} />);
    expect(wrapper.queryByText(/Locked/)).toHaveClass("red-led");
    expect(wrapper.queryByText(/Closed/)).toHaveClass("red-led");
    expect(wrapper.queryByText(/Locked/)).not.toHaveClass("green-led");
    expect(wrapper.queryByText(/Closed/)).not.toHaveClass("green-led");
  });
});
