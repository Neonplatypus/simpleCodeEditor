import React, { useState, useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/themes/prism.css';
import './style.css';

const highlight = (code) => Prism.highlight(code, Prism.languages.jsx, 'jsx');

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const codeOutputRef = useRef(null);

  useEffect(() => {
    if (codeOutputRef.current) {
      codeOutputRef.current.innerHTML = highlight(code);
    }
  }, [code]);

  return (
    <div className="code-editor-container">
      <textarea
        value={code}
        onChange={handleCodeChange}
        className="code-input"
        spellCheck="false"
        placeholder="Write your code here..."
      />
      <pre className="code-output">
        <code
          ref={codeOutputRef}
          className="language-js"
          dangerouslySetInnerHTML={{ __html: Prism.highlight(code, Prism.languages.js, 'javascript') }}
        />
      </pre>
    </div>
  );
};

export default CodeEditor;
