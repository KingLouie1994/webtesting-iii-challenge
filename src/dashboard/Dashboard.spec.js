import Dashboard from './Dashboard';
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(<Dashboard />);
});

describe("display component", () => {
  test("shows controls and initial display", () => {
    expect(wrapper.queryByText(/locked/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
  });

  test("shows default values - unlocked and open", () => {
    expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
  })

  test("cannot be closed or opened if locked", () => {
    rtl.fireEvent.click(wrapper.queryByText(/lock gate/i));
    expect(wrapper.queryByText(/open gate/i)).not.toBeInTheDocument();
    expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();  
  })
});
