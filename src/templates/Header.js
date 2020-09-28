
const Header = () => {
    const view = `
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    <div class="fixed-top">
      <nav class="navbar navbar-expand-xl navbar-dark mx-background-top-linear">
        <div class="container">
          <a class="navbar-brand" rel="nofollow" href="/">
              <strong>www.themoviedb.org</strong>    
          </a>
          
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
    
            <ul class="navbar-nav ml-auto">
    
              <li class="nav-item active">
                <a class="nav-link" href= "https://www.themoviedb.org">Enlace Original
                  <span class="sr-only">(current)</span>
                </a>
              </li>    
            </ul>
          </div>
        </div>
      </nav>
    </div>
    `
    return view;
};

export default Header;