function BlogCard({ title, excerpt, id, date }) {
    return (
      <article className="blog-card">
        <h2>{title}</h2>
        <p className="date">{date}</p>
        <p className="excerpt">{excerpt}</p>
        <a href={`blog.html?id=${id}`}>Leer más</a>
      </article>
    );
  }