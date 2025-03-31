function Header() {
    return (
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="index.html">
              <img src="images/LogoCEPI.PNG" alt="Logo CEPI" className="logo" />
              CEPI Cégep de Jonquière
            </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link active" href="index.html">Accueil</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="blog.html">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Menu3</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Menu4</a>
                        </li>
                    </ul>
                </div>
            </div>
            <img src="images/perfil-empty.png" alt="Perfil image" class="perfil"></img>
        </nav>

        <nav class="filter-section">
          <div class="container-fluid">
            <div class="row align-items-center">
                
                <div class="col-md-6">
                    <label for="sort-by" class="form-label">Trier par:</label>
                    <select class="form-select" id="sort-by">
                        <option selected>Select</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                </div>
    
                
                <div class="col-md-6">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
          </div>
        </nav>
      </header>

      
    );
  }