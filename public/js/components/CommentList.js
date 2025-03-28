function CommentList({ blogId }) {
    const [comments, setComments] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
  
    React.useEffect(() => {
      // Simulación de API (reemplazar con fetch real)
      setTimeout(() => {
        const mockComments = [
          { id: 1, author: "Usuario1", text: "¡Excelente artículo!", date: "2023-10-01" },
          { id: 2, author: "Usuario2", text: "Muy útil, gracias.", date: "2023-10-02" }
        ];
        setComments(mockComments);
        setLoading(false);
      }, 1000);
    }, [blogId]);
  
    if (loading) return <div>Cargando comentarios...</div>;
  
    return (
      <div className="comment-list">
        <h3>Comentarios ({comments.length})</h3>
        {comments.map(comment => (
          <Comment 
            key={comment.id}
            author={comment.author}
            text={comment.text}
            date={comment.date}
          />
        ))}
      </div>
    );
  }