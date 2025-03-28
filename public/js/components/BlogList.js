function BlogList() {
    const [blogs, setBlogs] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
  
    React.useEffect(() => {
      // Simulando carga de datos (reemplaza con tu API real)
      setTimeout(() => {
        const mockBlogs = [
          { id: 1, title: 'Primer artículo', excerpt: 'Resumen del primer artículo...', date: '2023-01-01' },
          { id: 2, title: 'Segundo artículo', excerpt: 'Resumen del segundo artículo...', date: '2023-01-02' }
        ];
        setBlogs(mockBlogs);
        setLoading(false);
      }, 1000);
    }, []);
  
    if (loading) return <div>Cargando artículos...</div>;
  
    return (
      <div className="blog-list">
        {blogs.map(blog => (
          <BlogCard 
            key={blog.id}
            title={blog.title}
            excerpt={blog.excerpt}
            id={blog.id}
            date={blog.date}
          />
        ))}
      </div>
    );
  }