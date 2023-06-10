import './App.css';
import ProjectContainer from './ProjectContainer';

const projects = [
  {
    name:'Movie Search',
    description:'A simple movie search react app with OMDB API',
    src:'images/simple-movie-search.png',
    giturl:'https://github.com/ranjithmano13/moviesearch-reactapp.git',
    projectLink:'https://ranjithmano13.github.io/moviesearch-reactapp'
  },
  {
    name:'Movie Search',
    description:'A simple movie search react app connecting with OMDB API',
    src:'images/simple-movie-search.png',
    giturl:'https://github.com/ranjithmano13/simple-movie-search-react-app.git',
    projectLink:'https://ranjithmano13.github.io/simple-movie-search-react-app'
  },
  {
    name:'Movie Search',
    description:'A simple movie search react app connecting with OMDB API',
    src:'images/simple-movie-search.png',
    giturl:'https://github.com/ranjithmano13/simple-movie-search-react-app.git',
    projectLink:'https://ranjithmano13.github.io/simple-movie-search-react-app'
  },
  {
    name:'Movie Search',
    description:'A simple movie search react app connecting with OMDB API',
    src:'images/simple-movie-search.png',
    giturl:'https://github.com/ranjithmano13/simple-movie-search-react-app.git',
    projectLink:'https://ranjithmano13.github.io/simple-movie-search-react-app'
  },
  {
    name:'Movie Search',
    description:'A simple movie search react app connecting with OMDB API',
    src:'images/simple-movie-search.png',
    giturl:'https://github.com/ranjithmano13/simple-movie-search-react-app.git',
    projectLink:'https://ranjithmano13.github.io/simple-movie-search-react-app'
  },
  {
    name:'Movie Search',
    description:'A simple movie search react app connecting with OMDB API',
    src:'images/simple-movie-search.png',
    giturl:'https://github.com/ranjithmano13/simple-movie-search-react-app.git',
    projectLink:'https://ranjithmano13.github.io/simple-movie-search-react-app'
  },
  {
    name:'Movie Search',
    description:'A simple movie search react app connecting with OMDB API',
    src:'images/simple-movie-search.png',
    giturl:'https://github.com/ranjithmano13/simple-movie-search-react-app.git',
    projectLink:'https://ranjithmano13.github.io/simple-movie-search-react-app'
  },
  {
    name:'Movie Search',
    description:'A simple movie search react app connecting with OMDB API',
    src:'images/simple-movie-search.png',
    giturl:'https://github.com/ranjithmano13/simple-movie-search-react-app.git',
    projectLink:'https://ranjithmano13.github.io/simple-movie-search-react-app'
  },
  {
    name:'Movie Search',
    description:'A simple movie search react app connecting with OMDB API',
    src:'images/simple-movie-search.png',
    giturl:'https://github.com/ranjithmano13/simple-movie-search-react-app.git',
    projectLink:'https://ranjithmano13.github.io/simple-movie-search-react-app'
  },
  {
    name:'Movie Search',
    description:'A simple movie search react app connecting with OMDB API',
    src:'images/simple-movie-search.png',
    giturl:'https://github.com/ranjithmano13/simple-movie-search-react-app.git',
    projectLink:'https://ranjithmano13.github.io/simple-movie-search-react-app'
  },
  {
    name:'Movie Search',
    description:'A simple movie search react app connecting with OMDB API',
    src:'images/simple-movie-search.png',
    giturl:'https://github.com/ranjithmano13/simple-movie-search-react-app.git',
    projectLink:'https://ranjithmano13.github.io/simple-movie-search-react-app'
  },
  {
    name:'Movie Search',
    description:'A simple movie search react app connecting with OMDB API',
    src:'images/simple-movie-search.png',
    giturl:'https://github.com/ranjithmano13/simple-movie-search-react-app.git',
    projectLink:'https://ranjithmano13.github.io/simple-movie-search-react-app'
  },
  {
    name:'Movie Search',
    description:'A simple movie search react app connecting with OMDB API',
    src:'images/simple-movie-search.png',
    giturl:'https://github.com/ranjithmano13/simple-movie-search-react-app.git',
    projectLink:'https://ranjithmano13.github.io/simple-movie-search-react-app'
  },
  {
    name:'Movie Search',
    description:'A simple movie search react app connecting with OMDB API',
    src:'images/simple-movie-search.png',
    giturl:'https://github.com/ranjithmano13/simple-movie-search-react-app.git',
    projectLink:'https://ranjithmano13.github.io/simple-movie-search-react-app'
  },
  {
    name:'Movie Search',
    description:'A simple movie search react app connecting with OMDB API',
    src:'images/simple-movie-search.png',
    giturl:'https://github.com/ranjithmano13/simple-movie-search-react-app.git',
    projectLink:'https://ranjithmano13.github.io/simple-movie-search-react-app'
  },
  {
    name:'Movie Search',
    description:'A simple movie search react app connecting with OMDB API',
    src:'images/simple-movie-search.png',
    giturl:'https://github.com/ranjithmano13/simple-movie-search-react-app.git',
    projectLink:'https://ranjithmano13.github.io/simple-movie-search-react-app'
  },
  {
    name:'Movie Search',
    description:'A simple movie search react app connecting with OMDB API',
    src:'images/simple-movie-search.png',
    giturl:'https://github.com/ranjithmano13/simple-movie-search-react-app.git',
    projectLink:'https://ranjithmano13.github.io/simple-movie-search-react-app'
  },
]

function App() {
  return (
    <div className="App">
      <h1 className='header'>100 React Apps</h1>
      <ul>
      {projects.map((project)=>(
        <ProjectContainer name={project.name} description={project.description} src={project.src} giturl={project.giturl} projectLink={project.projectLink}/>
      ))}
      </ul>
    </div>
  );
}

export default App;
