import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  // ----------------------------------------------------------

  // 2 methods for solving - 1)ternary operator 2)creating function
  // 'Add button' is solved by ternary operator
  //rows are set by ternary operator
  // and 'Title' is solved by creating a new function

  const [visible, setVisible] = useState(true);

  function expand() {
    if (visible === true) {
      return (
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
      );
    } else {
      return null;
    }
  }

  function handleVisible(visible) {
    setVisible((preValue) => {
      //fat-arrow function having preValue as argument
      //will return !preValue
      //which will be accepted by setVisible as an argument.
      return !preValue;
    });
  }

  // ---------------------------------------------------------------

  return (
    <div>
      <form className="create-note">
        {/* ---------------------------------------------------------       */}

        {expand()}

        {/* ---------------------------------------------------------       */}
        <textarea
          name="content"
          onClick={handleVisible}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={visible === true ? 3 : 1}
        />
        {/* ---------------------------------------------------------       */}
        {visible === true ? (
          <Zoom in={true}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        ) : null}
      </form>
    </div>
  );
}

export default CreateArea;
