import React, { useEffect, useState } from "react";
import "../css/Feed.css";
import db from "../firebase";
import Post from "./Post";
import GrequoBox from "./GrequoBox";

function Feed() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("questions")
      .orderBy("timestamp", "desc")
      .onSnapshot(snapshot =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            question: doc.data(),
          }))
          )
        );
  }, []);

  return (
    <div className="feed">
      <GrequoBox />
      {posts.map(({ id, question}) => (
        <Post
          key = {id}
          Id = {id}
          imageUrl = {question.imageUrl}
          question = {question.question}
          timestamp = {question.timestamp}
          grequoUser = {question.user}
        />
      ))}
    </div>
  );
}

export default Feed;