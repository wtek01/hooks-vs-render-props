import React, { useState } from "react";

export default function BasicEditableItem({ label, initialValue }) {
  const [value, setValue] = useState(initialValue);
  const [editorVisible, setEditorVisible] = useState(false);

  const toggleEditor = () => setEditorVisible(!editorVisible);

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
      <button onClick={toggleEditor}>{editorVisible ? "Done" : "Edit"}</button>
    </main>
  );
}
