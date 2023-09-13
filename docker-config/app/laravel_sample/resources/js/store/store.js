// store.js

import { createStore } from "vuex";
import orderDescription from "../constants/orderDescription";

const store = createStore({
  state: {
    // 状態を定義

    // プログラム格納用の変数
    storeCount: 200,
    orderMemory: [],
    programString: "",

    // サブルーチン格納用の変数
    subroutineStoreCount: 300,
    subroutineMemory: [],
    subroutineProgramString: "",
    subroutineList:[],

    // 定数格納用の変数
    constantCount: 500,
    constantMemory: [],
    constantProgramString: "",
  },
  mutations: {
    setOrderMemory(state, order) {
      state.storeCount++;
      // orderMemory配列に対して命令を格納
      state.orderMemory.push(order);
    },

    deleteOrderMemory(state) {
      state.orderMemory.splice(0, state.orderMemory.length);
      state.programString = "";
      state.storeCount = 200;
    },

    setSubroutineMemory(state, order) {
      state.subroutineStoreCount++;
      state.subroutineMemory.push(order);
    },

    setConstantMemory(state, order) {
      state.constantCount++;
      // orderMemory配列に対して命令を格納
      state.constantMemory.push(order);
    },

    setProgramString(state, order) {
      if(state.storeCount == 200){
        state.programString = "200:" + order;
      }else{
        state.programString = state.programString + "," + order;
      }
    },

    setSubroutineProgramString(state, order) {
      if(state.subroutineStoreCount == 300){
        state.subroutineProgramString = "300:" + order;
      }else{
        state.subroutineProgramString = state.subroutineProgramString + "," + order;
      }
    },

    setConstantProgramString(state, content){
      if(state.constantCount == 500){
        state.constantProgramString = "500:" + content;
      }else{
        state.constantProgramString = state.constantProgramString + "," + content;
      }
    }
  },
  actions: {
    // アクションを定義
    // 例: incrementAsync(context) { setTimeout(() => { context.commit('increment'); }, 1000); }
    setOrderMemoryAction(context, order) {
      let functionName;
      let address;

      if (order["order"].includes(":")) {
        const [key, value] = order["order"].split(":");
        order["order"] = value;
        console.log(key)
      }


      if (order["order"][1] == "L") {
        functionName = order["order"][0] + order["order"][1];
        address = order["order"].substring(2);
      } else {
        functionName = order["order"][0];
        address = order["order"].substring(1);
      }

      console.log(functionName);
      console.log(address);
      console.log(orderDescription[functionName]["previousString"]);

      order.order =
        orderDescription[functionName]["previousString"] +
        address +
        orderDescription[functionName]["posteriorString"];
      console.log(order.order);
      context.commit("setOrderMemory", order);
    },

    setSubRoutineAction(context, order) {
      
      let functionName;
      let address;

      if (order["order"].includes(":")) {
        const [key, value] = order["order"].split(":");
        order["order"] = value;
        console.log(key)
      }


      if (order["order"][1] == "L") {
        functionName = order["order"][0] + order["order"][1];
        address = order["order"].substring(2);
      } else {
        functionName = order["order"][0];
        address = order["order"].substring(1);
      }

      console.log(functionName);
      console.log(address);
      console.log(orderDescription[functionName]["previousString"]);

      order.order =
        orderDescription[functionName]["previousString"] +
        address +
        orderDescription[functionName]["posteriorString"];
      console.log(order.order);
      context.commit("setSubroutineMemory", order);
    },
  },
  getters: {
    // ゲッターを定義
    // stateに処理を加えて返したいときに便利(配列の中の最大値を返すなど)
    // 普通のreturnにも使う
    // 例: getCount(state) { return state.count; }
    getProgramString(state) {
      return state.programString;
    },
    getSubroutineProgramString(state) {
      return state.subroutineProgramString;
    },
    
    getConstantProgramString(state) {
      return state.constantProgramString;
    },
  },
});

export default store;
