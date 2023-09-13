<template>
  <v-menu v-model="menu" :close-on-content-click="false" location="end">
    <template v-slot:activator="{ props }">
      <v-list-item
        :title="title"
        :prepend-icon="icon"
        v-bind="props"
      ></v-list-item>
    </template>
    <!-- ポップアップのカード -->
    <v-card min-width="300">
      <v-card-title>{{ title }}</v-card-title>
      <v-list>
        <div>{{ previousString }}</div>
        <v-text-field
          density="compact"
          variant="outlined"
          v-model="address"
          placeholder="ターゲットアドレスを入力"
          label="アドレス"
        ></v-text-field>
        <div>{{ posteriorString }}</div>
      </v-list>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          variant="text"
          v-on:click="addOrderString(orderValue,previousString,posteriorString)"
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
      address: "",
      orderString: "",
    };
  },
  props: ["title", "icon", "orderValue", "previousString", "posteriorString"],
  
  methods: {
    addOrderString: function (orderValue,previousString,posteriorString) {
      // functionの種類、長語短語、番地の三種類を引数にして文字列を生成
      // 配列にも格納する(vuexを利用する)
      // vuexを利用して追加命令のaddressを管理する
      let order = previousString + this.address + posteriorString;
      let storeAddress = store.state.storeCount;

      let setValue = {"address":storeAddress , "order":order}
      // orderは配列に格納する
      // vuexとv-modelを使用する
      store.commit("setProgramString",orderValue + this.address)
      store.commit("setOrderMemory",setValue);
      this.menu = false;
      this.address = "";
    },
    
    deleteOrder:function(){
     
    }
  },
};
</script>
  
  <style>
</style>