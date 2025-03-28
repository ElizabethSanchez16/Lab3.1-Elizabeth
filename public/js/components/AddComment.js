function AddComment({ blogId }) {
    const [commentText, setCommentText] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      // Simulación de envío a API
      setTimeout(() => {
        console.log("Comentario enviado:", { blogId, text: commentText });
        setIsSubmitting(false);
        setSuccess(true);
        setCommentText("");
        setTimeout(() => setSuccess(false), 3000); // Mensaje de éxito desaparece
      }, 1500);
    };
  
    return (
      <div className="add-comment">
        <h3>Añadir comentario</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Escribe tu comentario..."
            required
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
          {success && <p className="success-message">¡Comentario enviado!</p>}
        </form>
      </div>
    );
  }