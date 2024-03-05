import "./App.css";
import AppInfo from "../appInfo/AppInfo";
import SearchPanel from "../searchPanel/SearchPanel";
import AppFilter from "../appFilter/AppFilter";
import MoviesList from "../moviesList/MoviesList";
import MoviesAddForm from "../moviesAddForm/MoviesAddForm";

function App() {
  const movies = [
    {
      name: "Qasoskorlar",
      view: "989",
      id:1,
    },
    {
      name: "Afsungar",
      view: "800",
      id:2,
    },
    {
      name: "Samolardan 3metr balandda",
      view: "757",
      id:3,
    },
  ];
  return (
    <div className="app">
      <div className="container">
        <AppInfo />
        <div className="searchPanel">
          <SearchPanel />
          <AppFilter />
        </div>
        <MoviesList movies={movies} />
        <MoviesAddForm />
      </div>
    </div>
  );
}

export default App;
