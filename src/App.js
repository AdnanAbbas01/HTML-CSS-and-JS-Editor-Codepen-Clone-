import { useState } from "react";

import Editor from "./Components/Editor";

import "./App.css";

const MainEditor = () => {
  const [html, setHtml] = useState("");
  const [js, setJs] = useState("");
  const [css, setCss] = useState("");

  const srcDoc = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
      ${css}
    </style>
  </head>
  <body>
    ${html}
    <script type="text/babel">
      ${js}
    </script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    </body>
  </html>

  `;
  return (
    <>
      <div className="editor__container">
        <Editor
          value={html}
          language="xml"
          onChange={setHtml}
          languageName="HTML"
        />
        <Editor
          value={css}
          language="css"
          onChange={setCss}
          languageName="CSS"
        />
        <Editor
          value={js}
          language="jsx"
          onChange={setJs}
          languageName="Javascript"
        />
      </div>
      <iframe
        name="output"
        sandbox="allow-scripts"
        height="100%"
        width="100%"
        frameBorder="0"
        srcDoc={srcDoc}
        title='output'
      />
    </>
  );
};

function App() {
  return <MainEditor />;
}

export default App;
