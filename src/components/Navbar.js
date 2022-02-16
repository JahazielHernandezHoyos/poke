const navbar = () => {
  return (
    <>
      <header className="bg-danger py-5">
        <h1 className="text-center text-white">POKEDEX</h1>
      </header>
      <nav class="py-2 navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
        <div
          class="justify-content-center collapse navbar-collapse"
          id="navbarNavDarkDropdown"
        >
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Seleccione el tipo de vista
              </a>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="/">
                    Galeria
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/tabla">
                    Tabla
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default navbar;
