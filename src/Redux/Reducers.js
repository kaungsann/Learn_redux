import { combineReducers } from "redux";

const getDbProducts = () => {
  const dbData = localStorage.getItem("products");
  return dbData ? JSON.parse(dbData) : [];
};
const saveProduct = (product) => {
  localStorage.setItem("products", JSON.stringify(product));
};

const producerReducers = (state = getDbProducts(), { type, payload }) => {
  switch (type) {
    case "add":
      saveProduct(payload);
      state = getDbProducts();
      return state;

    case "remove ":
      state = getDbProducts();
      let product = state.filter((pds) => pds._id == payload);
      saveProduct(product);
      state = getDbProducts();
      return state;
    default:
      state = getDbProducts();
      return state;
  }
};

const reducers = combineReducers({
  products: producerReducers,
});

export default reducers;
