import React from "react";
import { createComponent, type EventName } from "@lit/react";
import { LitSelect } from "./LitSelect.js";

// Creates a React component from a Lit component
export default createComponent({
  react: React,
  tagName: "lit-select",
  elementClass: LitSelect,
  events: {
    onChange: "option-changed" as EventName<CustomEvent<{ value: string }>>,
  },
});
