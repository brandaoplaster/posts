import HomePage from "../pages/HomePage.vue";
import ArticlePage from "../pages/ArticlePage.vue";

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
  }
];
