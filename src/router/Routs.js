import Cars from "../pages/Cars";
import Home from "../pages/Home";
import Services from "../pages/Services";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Single from "../pages/Single";

export const privateRouters = [
  {path: '/home', title: 'Home', component: Home, exact: false},
  {path: '/services', title: 'Services', component: Services, exact: false},
  {path: '/cars', title: 'Cars', component: Cars, exact: false},
  {path: '/about', title: 'About', component: About, exact: false},
  {path: '/blog', title: 'Blog', component: Blog, exact: false},
  {path: '/contact', title: 'Contact', component: Contact, exact: false},
  {path: '/single/:id', title: 'Single', component: Single, exact: false, invisibleInMenu: true},

]

export const publicRouters = [
]
