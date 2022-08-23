import { useState, useEffect } from "react";
import BlogList from "./blogList";
const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  useEffect(() => {
    fetch("http://localhost:8000")
      .then((res) => {
        return res.json;
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <div className="home">
      {blogs && (
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      )}
    </div>
  );
};

// Use Effect whenever there's a re-render, it triggers the state to run again.
// We can use UseEffect to fire a function after every re render.
// You don't always want to fire a function after every render, only after a particular render and we use UseEffect Dependencies Array.
// [] run the function after the first re-render.[name] Run the function after the name changes.
export default Home;

//Json
//npx json-server --watch data/db.json --port 800
// And we open it in a new terminal.

/*Props example
<BlogList
  blogs={blogs.filter((blog) => blog.author === "mario")}
  title="Mario Blogs"
  handleDelete={handleDelete}
/>;*/
