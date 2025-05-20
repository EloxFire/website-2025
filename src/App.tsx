import {BrowserRouter, Route, Routes} from "react-router";
import {routes} from "./helpers/routes.ts";
import Home from "./pages/Home.tsx";
import './styles/global.scss';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path={routes.home.path} element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
