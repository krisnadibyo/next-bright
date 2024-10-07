'use client';
import React from "react";


export default function CodeWrapper({ children }) {
  const [snippetShown, setSnippetShown] = React.useState(false);

  if (snippetShown) {
    return (
      <>
        {children}  
      </>
    );
  } else {
    return (
      <div className="reveal">
        <button
          onClick={() =>
            setSnippetShown(true)
          }
        >
          Reveal Content
        </button>
      </div>
    );
  }

}