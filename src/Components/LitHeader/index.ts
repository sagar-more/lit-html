import React from "react";
import { createComponent } from "@lit/react";
import { LitHeader } from "./LitHeader";

// Creates a React component from a Lit component
export default createComponent({
  react: React,
  tagName: "lit-header",
  elementClass: LitHeader,
});

