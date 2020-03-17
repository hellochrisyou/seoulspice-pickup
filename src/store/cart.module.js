import { ADD_ITEM, UPDATE_QTY, REMOVE_ITEM } from "./mutations.type";

const state = {
  items: []
};

const getters = {
  itemSubtotal(state) {
    return state.items.reduce(
      (carry, item) => carry + item.price * item.qty,
      0
    );
  },
  items(state) {
    return state.items;
  },
  countEntrees() {
    return state.items.filter(item => item.type === "entree").length;
  }
};

const mutations = {
  [ADD_ITEM](state, item) {
    state.items.push(item);
  },
  [UPDATE_QTY](state, payload) {
    state.items[payload.index].qty = payload.qty;
  },
  [REMOVE_ITEM](state, index) {
    state.items.splice(index, 1);
  }
};

export default {
  state,
  getters,
  mutations
};
