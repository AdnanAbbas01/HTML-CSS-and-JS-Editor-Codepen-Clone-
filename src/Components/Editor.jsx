import React from "react";
import { Controlled } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/jsx/jsx";
import "codemirror/mode/css/css";
import "codemirror/addon/lint/lint.css";
import "codemirror/addon/lint/lint";

import EditotWrapper from "./EditotWrapper";

const Editor = ({ languageName, language, value, onChange }) => {
  const changeHandler = (editor, _, value) => {
    onChange(value);
  };

  return (
    <EditotWrapper languageName={languageName}>
      <Controlled
        value={value}
        options={{
          lineNumbers: true,
          lineWrapping: true,
          mode: language,
          theme: "material",
          lint: true,
        }}
        className="editor"
        onBeforeChange={changeHandler}
      />
    </EditotWrapper>
  );
};

export default Editor;
