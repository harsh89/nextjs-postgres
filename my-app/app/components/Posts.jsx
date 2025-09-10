export default function Posts({ id, title, content, authorName }) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        
          <li key={id}>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Author: {authorName}</p>
          </li>
        
      </ul>
    </div>
  );
}