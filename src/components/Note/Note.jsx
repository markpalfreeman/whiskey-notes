import React from "react";

function Note(props) {
  return <div>{props.match.params.id}</div>;
}

export default Note;
