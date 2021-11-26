import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar, Button, Input } from "@material-ui/core";
import '../css/Navbar.css';
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
import Modal from "react-modal";
import { ExpandMore } from "@material-ui/icons";
import LinkIcon from "@material-ui/icons/Link";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import Contact from "./Contact";


Modal.setAppElement("#root");

function Navbar() {
  const user = useSelector(selectUser);
  const [openModal, setOpenModal] = useState(false);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");

  const handleQuestion = (e) => {
    e.preventDefault();
    setOpenModal(false);

    
      db.collection("questions").add({
        user: user,
        question: input,
        imageUrl: inputUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    

    setInput("");
    setInputUrl("");
  };


  return (
    <div className="gHeader">
      <div className="gHeader__logo">
        <h1>GREQUO</h1>
      </div>
      <div className="Navbar"></div>
      <button className="Navbar" onClick={ <Contact />}>Contact Us (at bottom)</button>


      <div className="gHeader__icons">
        <div className="gHeader__icon">
          <HomeIcon />
        </div>
        <div className="gHeader__icon">
          <FeaturedPlayListOutlinedIcon />
        </div>
        <div className="gHeader__icon">
          <AssignmentTurnedInOutlinedIcon />
        </div>
        <div className="gHeader__icon">
          <PeopleAltOutlinedIcon />
        </div>
        <div className="gHeader__icon">
          <NotificationsOutlinedIcon />
        </div>
      </div>
      <div className="gHeader__input">
        <SearchIcon />
        <input type="text" placeholder="Search Grequo" />
      </div>
      <div className="gHeader__Rem">
        <div className="gHeader__avatar">
          <Avatar
            onClick={() => auth.signOut()}
            className="Avatar"
            src={
              user.photo
                ? user.photo
                : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
            }
          />
        </div>
        <LanguageIcon />
        <Button onClick={() => setOpenModal(true)}>Add Question</Button>
        <Modal
          isOpen={openModal}
          onRequestClose={() => setOpenModal(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              width: 700,
              height: 600,
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-300px",
              marginLeft: "-350px",
            },
          }}
        >
          <div className="modal__title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal__info">
            <Avatar
              className="avatar"
              src={
                user.photo
                  ? user.photo
                  : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
              }
            />
            <p>{user.disPlayName ? user.disPlayName : user.email} asked</p>
            <div className="modal__scope">
              <PeopleAltOutlinedIcon />
              <p>Public</p>
              <ExpandMore />
            </div>
          </div>
          <div className="modal__Field">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start your question with 'What', 'How', 'Why', etc. "
            />
            <div className="modal__fieldLink">
              <LinkIcon />
              <input
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                type="text"
                placeholder="Optional: inclue a link that gives context"
              ></input>
            </div>
          </div>
          <div className="modal__buttons">
            <button className="cancle" onClick={() => setOpenModal(false)}>
              Cancel
            </button>
            <button type="sumbit" onClick={handleQuestion} className="add">
              Add Question
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Navbar;