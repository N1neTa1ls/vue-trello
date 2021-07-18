import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex);


let store = new Vuex.Store({
  state: {
    tasks: []
  },
  mutatioms: {
    SET_TASKS_TO_STATE: (state, tasks) => {
      state.tasks = tasks;
    }
  },
  actions: {
    GET_TASKS_FROM_API({commit}) {
      return axios('https://trello.backend.tests.nekidaem.ru/api/v1/cards/',{
      method: "GET",
      headers: {
        Authorization: 'JWT adsfasd3qo8z3zrq9w8exnyo',
      },
      })
        .then((tasks) => {
          commit('SET_TASKS_TO_STATE', tasks);
          return tasks;
        })
          .catch((error) => {
            console.log(error)
            return error;
          })
    }
  },
  getters: {
    TASKS(state) {
      return state.tasks 
    }
  }
});

export default store;