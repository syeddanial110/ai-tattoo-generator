export const ApiEndpoints = {
  auth: {
    base: "/auth",
    login: "/login",
    register: "/register",
    update: "/update",
  },
  children: {
    base: "/children",
    getAll: "/get",
    getById: "/getById",
    create: "/create",
    update: "/update",
    delete: "/delete",
  },
  categories: {
    base: "/category",
    getAll: "/get",
    getById: "/getById",
    getBySlug: "/getBySlug/",
  },
  subCategory: {
    base: "/subCategory",
    getAll: "/get",
    getById: "/getById",
  },
  products: {
    base: "/product",
    getAll: "/getAllProduct",
    getById: "/getProductById",
    getProductByQuery: "/getProductcatSubcatSlug",
  },
  pages: {
    base: "/pages",
    getAll: "/getAll",
    getById: "/getById",
  },
  addToCart: {
    base: "/cart",
    get: "/get",
    create: "/create",
    delete: "/delete",
  },
  menu: {
    base: "/content",
    getAll: "/get",
    getById: "/getById",
    getBySlug: "/getBySlug",
  },
};
