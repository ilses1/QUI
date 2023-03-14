export default [
  {
    path: "/",
    name: "home",
    component: () => import("../../views/home.vue"),
    children: [
      {
        path: "/",
        name: "button",
        component: () => import("@/components/q-button/doc/doc.md"),
      },
      {
        path: "/input",
        name: "input",
        component: () => import("@/components/q-input/doc/doc.md"),
      },
      {
        path: "/tree",
        name: "tree",
        component: () => import("@/components/q-tree/doc/doc.md"),
      },
    ],
  },
];
