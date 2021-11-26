import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlined";
import ShareOutlined from "@material-ui/icons/ShareOutlined";
import MoreHorizOutlined from "@material-ui/icons/MoreHorizOutlined";
import '../css/Post.css';
import Modal from "react-modal";
import '../css/Navbar.css';
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db from "../firebase";
import { selectQuestionId, selectQuestionName, setQuestionInfo } from "../features/questionSlice";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

Modal.setAppElement("#root");

function Post({ Id, question, imageUrl, timestamp, grequoUser }) {
    const user = useSelector(selectUser);
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch();

    const questionName = useSelector(selectQuestionName);
    const questionId = useSelector(selectQuestionId);
    const [answer, setAnswer] = useState("");
    const [getAnswer, setGetAnswer] = useState([]);

  useEffect(() => {
    if (questionId) {
      db.collection("questions").doc(questionId).collection("answer").orderBy("timestamp", "desc").onSnapshot(snapshot => setGetAnswer(snapshot.docs.map((doc) => ({ 
                id: doc.id, 
                answers: doc.data() 
            }))))
        }
    });

    const handleAnswer = (e) => {
        e.preventDefault();
    
        if (questionId) {
          db.collection("questions").doc(questionId).collection("answer").add({
                user: user,
                answer: answer,
                questionId: questionId,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
        }
        console.log(questionId, questionName);
        setAnswer("");
        setOpenModal(false);
    };

    return (
        <div className = "post" 
            onClick={() => dispatch(setQuestionInfo({
                questionId: Id,
                questionName: question,
            }))}
            >
            <div className = "post__info" >
                <Avatar
                    src = {grequoUser.photo}
                />
                <h5>{grequoUser.displayName ? grequoUser.displayName : grequoUser.email}</h5>
                <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
            </div>
            <div className = "post__body">
                <div className = "post__question">
                    <p>{question}</p>
                    <button onClick={() => setOpenModal(true)} className = "post__btnAnswer">
                        Answer
                    </button>
                    <Modal
                        isOpen={openModal}
                        onRequestClose={() => setOpenModal(false)}
                        shouldCloseOnOverlayClick={false}
                        style={{
                            overlay: {
                                width: 680,
                                height: 550,
                                backgroundColor: "rgba(0,0,0,0.8)",
                                zIndex: "1000",
                                top: "50%",
                                left: "50%",
                                marginTop: "-250px",
                                marginLeft: "-350px",
                            },
                        }}
                      >
                        <div className="modal__question">
                            <h1>{question}</h1>
                            <p>
                                asked by <span className="name">{grequoUser.displayName ? grequoUser.displayName : grequoUser.email} </span> {""}
                                    on <sapn className="name">{new Date(timestamp?.toDate()).toLocaleString()}</sapn>
                            </p>
                        </div>
                        <div className="modal__answer">
                            <textarea 
                            required
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            placeholder="Enter Your Answer" type="text" />
                        </div>
                        <div className="modal__button">
                            <button className="cancle" onClick={() => setOpenModal(false)}>
                                Cancel
                            </button>
                            <button onClick={handleAnswer} type="sumbit" className="add">
                                Add Answer
                            </button>
                        </div>
                    </Modal>
                </div>
                <div className = "post__answer">
                    {
                        getAnswer.map(({ id, answers }) => (
                            <p 
                            key={id} 
                            style={{ position: "relative", 
                            paddingBottom: "5px" }}>
                                {Id === answers.questionId ? (
                                    <span>
                                    {answers.answer}
                                    <br />
                                    <span
                                      style={{
                                      position: "absolute",
                                      color: "gray",
                                      fontSize: "small",
                                      display: "flex",
                                      right: "0px",
                                    }}
                                  >
                                    <span style={{ color: "#b92b27" }}>
                                      {answers.user.displayName
                                        ? answers.user.displayName
                                        : answers.user.email} on {new Date(answers.timestamp?.toDate()).toLocaleString()}
                                    </span>
                                  </span>
                                </span>
                              ) : (
                                ""
                              )}
                            </p>
                          ))
                    }
                    <p></p>
                </div>
                <img src = {imageUrl} alt ="" />
            </div>
            <div className = "post__footer">
                <div className = "post__footerAction">
                    <ArrowUpwardOutlinedIcon />
                    <ArrowDownwardOutlinedIcon />
                </div>
                <RepeatOutlinedIcon />
                <ChatBubbleOutlinedIcon />
                <div className = "Post__footerLeft">
                    <ShareOutlined />
                    <MoreHorizOutlined />
                </div>
            </div>
        </div>
    );
}

export default Post;