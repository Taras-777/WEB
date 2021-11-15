import './App.css';
import {Topbar} from "../Navigation/Topbar/Topbar";
import {Footer} from "../Navigation/Footer/Footer";
import {Homepage} from "../Pages/Home/Homepage";

export const App = () => (
    <div className="App">
        <Topbar />
        <Homepage />
        <Footer />
    </div>
)

export default App;
