
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/pages/Home';
import { loginPath } from './components/helpers/routePaths';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Navigate to={loginPath}/>} />
        <Route path={loginPath} element = {<Home />} />
      </Routes>
    </>
  )
}

export default App
