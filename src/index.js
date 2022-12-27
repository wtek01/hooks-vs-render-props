import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import EditableItem from "./hooks/EditableItem";
import EditableItem2 from "./renderProps/EditableItem2";
import BasicEditableItem from "./basic/BasicEditableItem";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <span>HOOKS</span>
    <br />
    <EditableItem label="Name" initialValue="initial value" />
    <br />
    <br />
    <span>RENDER PROPS</span>
    <br />
    <EditableItem2 label="Name" initialValue="initial value" />
    <br />
    <br />
    <span>BASIC COMPONENT</span>
    <br />
    <BasicEditableItem label="Name" initialValue="initial value" />
  </StrictMode>
);
