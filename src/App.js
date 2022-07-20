
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import New from './pages/new/New'
import Single from './pages/single/Single'
import List from './pages/list/List'
import "./style/Dark.scss"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { productInput, userInput } from './inputSource'
import { DarkModeContext } from './Context/darkModeContext'
import { useContext } from 'react'

function App() {

  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className= {darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element = {<Home/>}/>
            <Route path="login" element = {<Login/>} />
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>} />
              <Route path = "new" element = {<New inputs = {userInput} title = "Add New User"/>}/>
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInput} title="Add New Products" />} />
            </Route>

          </Route>          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
