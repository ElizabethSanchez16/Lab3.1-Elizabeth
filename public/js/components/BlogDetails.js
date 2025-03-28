function BlogDetails({ blogId }) {
    const [blog, setBlog] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
  
    React.useEffect(() => {
      // Simular carga de datos del blog
      setTimeout(() => {
        const mockBlog = {
          id: blogId,
          title: `Artículo ${blogId}`,
          content: 'Contenido detallado del artículo...',
          date: '2023-01-01',
          author: 'Autor Ejemplo'
        };
        setBlog(mockBlog);
        setLoading(false);
      }, 800);
    }, [blogId]);
  
    if (loading) return <div>Cargando artículo...</div>;
  
    return (
      <article className="blog-details">
        <h1>{blog.title}</h1>
        <p className="meta">Por {blog.author} el {blog.date}</p>
        <div className="content">{blog.content}</div>
      </article>
    );
  }