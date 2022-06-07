import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/routes/Navigation/navigation.component";
import { SignIn } from "./components/routes/sign-in/sign-in.component";
import Home from "./components/routes/home/home.component";

const Shop = () => {
  return(
    <div>
      This si the shoip
    </div>
  )
}

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
    
  )
};

export default App;
