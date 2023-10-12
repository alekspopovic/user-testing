import React, { useState } from "react";
import "./globals.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [newComment, setNewComment] = useState("");

  const handlePost = () => {
    setPosts([...posts, newPost]);
    setNewPost("");
  };

  const handleComment = (postId) => {
    const updatedPosts = [...posts];
    updatedPosts[postId] = `${updatedPosts[postId]}\nComment: ${newComment}`;
    setPosts(updatedPosts);
    setNewComment("");
  };

  return (
    <div className="posts-container">
      <h1>Posts</h1>
      <div className="post-input">
        <textarea
          placeholder="Create a new post"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          id="newPost"
        />
        <button onClick={handlePost} id="postButton">
          Post
        </button>
      </div>

      {posts.map((post, index) => (
        <div key={index} className="post">
          <p>{post}</p>
          <div className="comment-input">
            <textarea
              placeholder="Add a comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              id="newComment"
            />
            <button onClick={() => handleComment(index)} id="commentButton">
              Comment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
