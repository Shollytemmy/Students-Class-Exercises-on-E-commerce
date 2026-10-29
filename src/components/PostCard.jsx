import { useState } from "react";

function PostCard({ title, author }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  function toggleLike() {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  }

  return (
    <article className="card">
      <h3>{title}</h3>
      <small>By {author}</small>
      <button onClick={toggleLike}>
        {liked ? "❤️ Liked" : "🤍 Like"} ({likes})
      </button>
    </article>
  );
}

export default PostCard
