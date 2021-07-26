import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("./components/TutorialsList.vue")
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("./components/TutorialDetails.vue")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddTutorial.vue")
  },

  {
    path: "/test",
    name: "test",
    component: () => import("./components/DataTestComp.vue")
  },
  {
    path: "/upload",
    name: "upload",
    component: () => import("./components/UploadFilesComp.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
