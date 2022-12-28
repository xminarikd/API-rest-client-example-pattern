let routes = {
  viewRoute: null,
  createRoute: null,
  editRoute: null,
  deleteRoute: null,
  deleteMultipleRoute: null,
  provideRoute: null,
  reorderRoute: null,
  tagsRoute: null,
};

function setRoutes(value) {
  routes = { ...routes, ...value };
}

export { routes, setRoutes };
