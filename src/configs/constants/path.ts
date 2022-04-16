/*
 * AdminPage will be a big page, in admin, there will be subpages, for example, products, orders, employees,...
 * And in these subpages, it will have sub route like create, detail, deleted, update, etc
 */
export const CREATE = "CREATE";
export const DETAIL = "DETAIL";
export const UPDATE = "UPDATE";
export const DELETE = "DELETE";
export const LOGIN = "/";
export const ADMIN = "admin/*";
export const DASHBOARD = "/admin";
export const PRODUCTS = "products/*";
export const ORDERS = "orders/*";
export const EMPLOYEES = "employees/*";
export const REVIEWS = "reviews/*";

export const TO_PRODUCTS = DASHBOARD + "/products";
export const TO_ORDERS = DASHBOARD + "/orders";
export const TO_EMPLOYEES = DASHBOARD + "/employees";
export const TO_REVIEWS = DASHBOARD + "/reviews";
