import HomePage from "../pages/HomePage.vue";
import ArticlePage from "../pages/ArticlePage.vue";
import AboutPage from "../pages/AboutPage.vue";

export default [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/article/:id",
    name: "article",
    component: ArticlePage
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage
  }
];
