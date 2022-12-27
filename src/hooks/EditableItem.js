import React, { useState } from "react";
import useToggle from "./useToggle";

export default function EditableItem({ label, initialValue }) {
  const [value, setValue] = useState(initialValue);
  const [editorVisible, toggleEditorVisible] = useToggle(false);

  return (
    <main>
      {editorVisible ? (
        <label>
          {label}
          <input
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </label>
      ) : (
        <span>{value}</span>
      )}
      <button onClick={toggleEditorVisible}>
        {editorVisible ? "Done" : "Edit"}
      </button>
    </main>
  );
}
