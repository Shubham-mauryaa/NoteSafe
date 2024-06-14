import React, { useContext, useEffect, useRef, useState } from 'react'
import contextvalue from "../context/notes/NoteContext"
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useNavigate, Link } from 'react-router-dom';

const Notes = (props) => {
  const context = useContext(contextvalue);
  let navigate = useNavigate();
  const { notes, getnote, editnote } = context;
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getnote()
    }
    else {
      navigate("/login")
    }
  }, [])

  const [note, setNote] = useState({ id: "", edittitle: "", editdescription: "", edittag: "" })
  const ref = useRef(null)
  const refClose = useRef(null)
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({ id: currentNote._id, edittitle: currentNote.title, editdescription: currentNote.description, edittag: currentNote.tag });
  }


  const handleClick = (e) => {
    // console.log("updateing the note",note);
    editnote(note.id, note.edittitle, note.editdescription, note.edittag);
    refClose.current.click();
    props.showAlert("note updated", "success")
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <>
      <AddNote showAlert={props.showAlert} />
      {/* <!-- Button trigger modal --> */}
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit your note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="edittitle" name="edittitle" aria-describedby="emailHelp" value={note.edittitle} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" id="editdescription" name="editdescription" value={note.editdescription} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="edittag" name="edittag" value={note.edittag} onChange={onChange} minLength={5} required />
                </div>
              </form>

            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>

      <div className="notesclass" >
        <h1>Your Notes</h1>
        <div className="container">
          {notes.length === 0 && "No note to display"}
        </div>
        <div className="allnotes">
          {notes.map((notes) => {
            return <Noteitem key={notes._id} updateNote={updateNote} showAlert={props.showAlert} note={notes} />;
          })}
        </div>
      </div>

      <footer>
        <div className="footer-content">
          <span className="footer-text">Created by @ Shubham Maurya</span>
          <div className="social-icons">
            <Link to="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="https://github.com/Shubham-mauryaa" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Notes
