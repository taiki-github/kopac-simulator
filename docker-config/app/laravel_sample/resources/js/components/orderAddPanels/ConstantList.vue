<template>
    <v-menu v-model="menu" :close-on-content-click="false" location="end">
      <template v-slot:activator="{ props }">
        <v-list-item
          title="定数格納"
          v-bind="props"
        ></v-list-item>
      </template>
      <!-- ポップアップのカード -->
      <v-card min-width="300">
        <v-list>
          <v-text-field
            density="compact"
            variant="outlined"
            v-model="constant"
          ></v-text-field>
        </v-list>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            variant="text"
            v-on:click="addConstant(orderValue,previousString,posteriorString)"
          >
            追加
          </v-btn>
        </v-card-actions>
      </v-card>
      <!-- ------------------------------------ -->
    </v-menu>
    <!-- -------------------------------------------------------------------- -->
  </template>
    
    <script>
  import store from "../../store/store.js";
  export default {
    data() {
      return {
        menu: false,
        constant:""
      };
    },
    methods: {
      addConstant: function () {
        let storeAddress = store.state.constantCount;
  
        let setValue = {"address":storeAddress , "content":this.constant}
        // orderは配列に格納する
        // vuexとv-modelを使用する
        store.commit("setConstantProgramString",this.constant);
        store.commit("setConstantMemory",setValue);
        // store.commit("setProgramString",orderValue + this.address)
        this.menu = false;
        this.constant = "";
      },
    },
  };
  </script>
    
    <style>
  </style>