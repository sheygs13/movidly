import React, { useState, useEffect } from "react";

export default function NotFound() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRender(false);
    }, 4000);
  }, []);

  return render ? (
    <>
      <h2
        style={{
          textAlign: "center",
          color: "#444343",
          width: "50%",
          margin: "auto",
        }}
      >
        Movie Not Found
        <span role="img" arial-label="not found" />
        😕
      </h2>
    </>
  ) : null;
}
