function App() {
    return (
      <div className="app">
        <Header />
        <main>
          <BlogList />
        </main>
        <Footer />
      </div>
    );
  }
  
  // Renderizar la aplicación en el contenedor root
  ReactDOM.render(<App />, document.getElementById('root'));