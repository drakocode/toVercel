import logo from './bob.jpg';
import './App.scss';
import Header from './components/Header'
import Banner from './components/Banner'
import Cassino from './components/Cassino';
import Footer from './components/Footer';
import Lista from './components/Lista';






// import Greeting from './components/index';

function App() {






  return (
    <div className="App">

      <Header />

      <Banner Lista>

        <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Expand at sm</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample03">
              <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                  <ul class="dropdown-menu" aria-labelledby="dropdown03">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
              <form>
                <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
              </form>
            </div>
          </div>
        </nav>


      </Banner>
      <main>
        <header className="App-header">










          <img src={logo} className="App-logo" alt="logo" />

          <h1 className="App-h1">BOB APOSTAS EM RINHA DE GALO</h1>


          <a
            className="App-link"
            href="https://www.youtube.com/watch?v=0qnMG4RTUDQ&list=PL9UxICrz7rn4ZHkqxb2aZCYClTsjfq-C1&index=4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aposte agora mesmo!
          </a>
        </header>





        <Cassino >

        </Cassino >

      </main>
      {Lista.map((name) => {
        return (
          <>
            <li>Olá {name.firstName} {name.lastName}</li>
          </>
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
