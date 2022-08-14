import { Route, Routes } from "react-router-dom";
import Home from './routes/home/Home.component';
import Navigation from './routes/navigation/navigation.component'
import { Shop } from './routes/shop/shop.component';
import Authentication from './routes/authencation/authentication.component';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation></Navigation>}>

        <Route path="/" index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  )
};

export default App;
