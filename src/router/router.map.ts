import HomePage from "../pages/HomePage.vue";
import ArticlePage from "../pages/ArticlePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import CategoryPage from "../pages/CategoryPage.vue";

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
  },
  {
    path: '/category/:categoryName',
    name: "category",
    component: CategoryPage
  }
];
