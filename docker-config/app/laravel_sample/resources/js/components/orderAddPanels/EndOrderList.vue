<template>
    <v-menu v-model="menu" :close-on-content-click="false" location="end">
      <template v-slot:activator="{ props }">
        <v-list-item
          title="終了"
          v-bind="props"
        ></v-list-item>
      </template>
      <!-- ポップアップのカード -->
      <v-card min-width="300">
        <v-card-title>終了命令</v-card-title>
        <v-list>
          
        </v-list>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            variant="text"
            v-on:click="addOrderString(orderValue,previousString,posteriorString)"
          >
            終了
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
        orderString: "",
      };
    },
    
    methods: {
      addOrderString: function () {
        // functionの種類、長語短語、番地の三種類を引数にして文字列を生成
        // 配列にも格納する(vuexを利用する)
        // vuexを利用して追加命令のaddressを管理する
        let order = "終了";
        let storeAddress = store.state.storeCount;
  
        let setValue = {"address":storeAddress , "order":order}
        // orderは配列に格納する
        // vuexとv-modelを使用する
        store.commit("setProgramString","()")
        store.commit("setOrderMemory",setValue);
        this.menu = false;
      },
      
      deleteOrder:function(){
       
      }
    },
  };
  </script>
    
    <style>
  </style>