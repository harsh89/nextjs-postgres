"use client";

import { useState } from "react";

export default function AddPosts() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [authorName, setAuthorName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { title, content, authorName };
    console.log("🚀 ~ handleSubmit ~ data:", data);

    try {
      fetch("/api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    // const result = await response.json();
    // console.log("Server response:", result);
  };

  return (
    <div>
      <h1>Add Posts</h1>
      <form method="post" action="/api/add-post">
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea id="content" name="content" onChange={(e) => setContent(e.target.value)} required></textarea>
        </div>
        <div>
          <label htmlFor="authorName">Author Name:</label>
          <input type="text" id="authorName" name="authorName" onChange={(e) => setAuthorName(e.target.value)} required />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Add Post
        </button>
      </form>
    </div>
  );
}
