function BlogPage() {
    // Obtener el ID del blog de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id') || 1;
  
    return (
      <div className="app">
        <Header />
        <main>
          <BlogDetails blogId={blogId} />
          <CommentList blogId={blogId} />
          <AddComment blogId={blogId} />
        </main>
        <Footer />
      </div>
    );
  }
  
  ReactDOM.render(<BlogPage />, document.getElementById('root'));