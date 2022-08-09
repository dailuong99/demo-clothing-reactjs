import { Route, Routes } from "react-router-dom";
import Home from './components/routes/home/Home.component';
import Navigation from './components/routes/navigation/navigation.component';
import SignIn from './components/routes/sign-in/sign-in.component';

export const Shop = () => {
  return <h1>This is a SHOP!</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation></Navigation>}>

        <Route path="/" index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  )
};

export default App;
