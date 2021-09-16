import './App.css';
import './css/aos.css';
import './css/bootstrap.min.css';
import './css/bootstrap-datepicker.css';
import './css/jquery.fancybox.min.css';
// import './css/jquery-ui.css';
import './css/magnific-popup.css';

import './css/owl.theme.default.min.css';
import './css/style.css';
import './fonts/icomoon/style.css'
import './fonts/flaticon/font/flaticon.css'
import MyMenu from "./components/menu/MyMenu";


import {BrowserRouter} from "react-router-dom";
import Footer from "./components/footer/footer";
import {MainContext} from "./content";
import AppRouter from "./AppRouter";

const dataFooter = {
  title: "About Us",
  text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  listsUnstyled: [
    {
      id: 1,
      title: "Quick Links",
      links: [
        {id: 1, title: "About Us", href: "#"},
        {id: 2, title: "Testimonials", href: "#"},
        {id: 3, title: "Terms of Service", href: "#"},
        {id: 4, title: "Privacy", href: "#"},
        {id: 5, title: "About Us", href: "#"}
      ]
    },

    {
      id: 2,
      title: "Quick Links",
      links: [
        {id: 1, title: "About Us", href: "#"},
        {id: 2, title: "Testimonials", href: "#"},
        {id: 3, title: "Terms of Service", href: "#"},
        {id: 4, title: "Privacy", href: "#"},
        {id: 5, title: "About Us", href: "#"}
      ]
    },

    {
      id: 3,
      title: "Quick Links",
      links: [
        {id: 1, title: "About Us", href: "#"},
        {id: 2, title: "Testimonials", href: "#"},
        {id: 3, title: "Terms of Service", href: "#"},
        {id: 4, title: "Privacy", href: "#"},
        {id: 5, title: "About Us", href: "#"}
      ]
    }

  ]
}

function App() {
  return (
    <div className="App">
      <MainContext.Provider value={{dataFooter}}>
      <BrowserRouter>
        <AppRouter />
        <div className="site-wrap" id="home-section">
          <MyMenu />

          <Footer/>
        </div>
      </BrowserRouter>
      </MainContext.Provider>
    </div>
  );
}

export default App;
