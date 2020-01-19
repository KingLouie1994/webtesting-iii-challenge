import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
  wrapper = rtl.render(<Controls />);
});

describe("display component", () => {
  test("test runs", () => {
    expect(wrapper.queryByText(/the count is 0/i)).not.toBeInTheDocument();
  });

  test("provides button to toggle closed state", () => {
    expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
  });

  test("provides button to toggle locked state", () => {
    expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();
  });

  test("changes button text to reflect the state of the door if clicked", () => {
    const wrapper = rtl.render(<Controls locked={true} />);
    expect(wrapper.queryByText(/unlock gate/i)).toBeInTheDocument();
  });

  test("changes button text to reflect the state of the door if clicked", () => {
    const wrapper = rtl.render(<Controls closed={true} />);
    expect(wrapper.queryByText(/open gate/i)).toBeInTheDocument();
  });

  test("closed button is disabled if gate is locked", () => {
    const wrapper = rtl.render(<Controls locked={true} closed={true} />);
    expect(wrapper.queryByText(/open gate/i)).toBeDisabled();
  });

  test("locked button is disabled if gate is open", () => {
    const wrapper = rtl.render(<Controls locked={false} closed={false} />);
    expect(wrapper.queryByText(/lock gate/i)).toBeDisabled();
  });
});
