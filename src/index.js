import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import BasicEditableItem from "./basic/BasicEditableItem";
import EditableItemWithHooks from "./hooks/EditableItemWithHooks";
import EditableItemWithRenderProps from "./renderProps/EditableItemWithRenderProps";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <span>BASIC COMPONENT</span>
    <br />
    <BasicEditableItem label="Name" initialValue="Basic component" />
    <br />
    <br />
    <span>RENDER PROPS</span>
    <br />
    <EditableItemWithRenderProps label="Name" initialValue="Render props" />
    <br />
    <br />
    <span>HOOKS</span>
    <br />
    <EditableItemWithHooks label="Name" initialValue="Hooks" />
  </StrictMode>
);
