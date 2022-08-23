const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blogList">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview">
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}> Delete Blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;