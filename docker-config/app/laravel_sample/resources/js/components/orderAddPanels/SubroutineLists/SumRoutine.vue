<template>
  <v-menu v-model="menu" :close-on-content-click="false" location="end">
    <template v-slot:activator="{ props }">
      <v-list-item title="合計" v-bind="props"></v-list-item>
    </template>
    <v-card min-width="400">
      <v-card-title>合計サブルーチン</v-card-title>
      <v-list>
        <v-text-field
          density="compact"
          variant="outlined"
          label="入力番地"
          placeholder="入力値の入る最初の番地を入力"
          v-model="inputAddress"
        ></v-text-field>
        <v-text-field
          density="compact"
          variant="outlined"
          label="要素数"
          placeholder="加算する要素数を入力"
          v-model="addCount"
        ></v-text-field>
        <v-text-field
          density="compact"
          variant="outlined"
          label="出力番地"
          placeholder="出力する番地を入力"
          v-model="outputAddress"
        ></v-text-field>
      </v-list>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" variant="text" v-on:click="addSumRoutine()">
          追加
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>
    
    <script>
import store from "../../../store/store";
export default {
  data() {
    return {
      menu: false,
      inputAddress: "",
      addCount: "",
      outputAddress: "",
    };
  },
  methods: {
    addSumRoutine: function () {
      
      // コードレターの設定
      let storeAddress;
      let order;
      let setValue;

      order = "0A" + "=" + this.inputAddress;
      storeAddress = store.state.storeCount;
      setValue = { address: storeAddress, order: order };
      store.commit("setProgramString",order);
      store.commit("setOrderMemory", setValue); // 入力値の開始番地をコードレター(0A)に設定

      order = "0B" + "=" + this.addCount;
      storeAddress = store.state.storeCount;
      setValue = { address: storeAddress, order: order };
      store.commit("setProgramString",order);
      store.commit("setOrderMemory", setValue); // 入力値の数をコードレター(0B)に設定

      order = "0C" + "=" + this.outputAddress;
      storeAddress = store.state.storeCount;
      setValue = { address: storeAddress, order: order };
      store.commit("setProgramString",order);
      store.commit("setOrderMemory", setValue); // 出力番地をコードレター(0C)に設定



      //メインルーチンの格納
      let mainRoutine = "PcurrentAddress,JLsubRoutineAddress";
      let currentAddress = store.state.storeCount;
      let subRoutineAddress = store.state.subroutineStoreCount;


      mainRoutine = mainRoutine.replace("currentAddress", currentAddress);
      mainRoutine = mainRoutine.replace("subRoutineAddress", subRoutineAddress);
      
      const mainRoutineArr = mainRoutine.split(",").map((item) => item.trim());
      mainRoutineArr.forEach(function (item) {
        store.commit("setProgramString",item);
        let mainSetValue = { address: store.state.storeCount, order: item };
        store.dispatch("setOrderMemoryAction", mainSetValue);
      });



      // サブルーチンの格納
      // let subRoutine =
      //   "A40,X16R,P2,T1G,T0G,P0A,X8R,P1G,A,T1G,P0G,A49,T0G,P0G,S0B,K17R,JL,P8R,A49,X8R,JL6R";
      let subRoutine =
        "A40,X20R,P0C,X19,P2,T1G,T0G,P0A,X10R,P1G,A,T1G,P0G,A49,T0G,P0G,S0B,K21R,P1G,T,JL,P10R,A49,X10R,JL8R";

      // let subRoutine =
      //   "A40,X20R,P0C,X19,P2,T1G,T0G,P0A,X10R,P1G,A,T1G,P0G,A49,T0G,P0G,S0B,K21R,P1G,T,JL,P10R,A49,X10R,JL8R";

        // programString:
      //   "200:0A=0,JL300,300:P400,T0A,T405,P403,X6R,P0A,A,T0A,P405,A401,T405,P405,S402,K15R,(),P6R,A401,X6R,JL5R,400:0,1,5,500,0,0,500:1,10,100,1000,10000",


      // currentAddress = currentAddress + 2;
      // subRoutine = currentAddress + ":" + subRoutine;
      // store.dispatch("setSubRoutineAction",subRoutine,currentAddress);

      const subRoutineArr = subRoutine.split(",").map((item) => item.trim());

      subRoutineArr.forEach(function (item) {
        store.commit("setSubroutineProgramString",item)
        let setValue = { address: store.state.subroutineStoreCount, order: item };
        store.dispatch("setSubRoutineAction", setValue);
      });


      // 入力値のリセット
      this.inputAddress = "";
      this.addCount = "";
      this.outputAddress = "";
      this.menu = false;
    },
  },
};
</script>
    
    <style>
</style>