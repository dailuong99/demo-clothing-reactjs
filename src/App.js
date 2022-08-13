import { Route, Routes } from "react-router-dom";
import Home from './routes/home/Home.component';
import SignIn from './routes/sign-in/sign-in.component';
import Navigation from './routes/navigation/navigation.component'

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
