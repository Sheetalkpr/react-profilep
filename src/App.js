import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/ResponiveAppBar';
import Post from './components/Post'
import PostList from './components/PostList';

function App() {
  return (
    <>
      <ResponsiveAppBar/>
      <PostList/>
    </>
  );
}

export default App;
