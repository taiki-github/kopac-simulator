<template>
  <v-menu v-model="menu" :close-on-content-click="false" location="end">
    <template v-slot:activator="{ props }">
      <v-list-item
        title="変数格納"
        v-bind="props"
      ></v-list-item>
    </template>
    <v-card min-width="300">
      <v-list>
        <v-combobox
          v-model="valueable"
          :items="items"
        ></v-combobox>
      に
        <v-text-field
          density="compact"
          variant="outlined"
          v-model="content"
        ></v-text-field>
        を格納する
      </v-list>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          variant="text"
          v-on:click="addVariable(orderValue, previousString, posteriorString)"
        >
          追加
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>
    
    <script>
import store from "../../store/store.js";
export default {
  data() {
    return {
      menu: false,
      content: "",
      valueable:"",
      orderString: "",
      items: [
          '0A',
          '0B',
          '0C',
          '0D',
          '0E',
          '0F',
        ]
    };
  },
  methods: {
    addVariable: function () {
      // functionの種類、長語短語、番地の三種類を引数にして文字列を生成
      // 配列にも格納する(vuexを利用する)
      // vuexを利用して追加命令のaddressを管理する
      let order = this.valueable + "=" + this.content;
      let storeAddress = store.state.storeCount;

      let setValue = { address: storeAddress, order: order };
      // orderは配列に格納する
      // vuexとv-modelを使用する
      store.commit("setOrderMemory", setValue);
      store.commit("setProgramString", order);
      this.menu = false;
      this.address = "";
    },
  },
};
</script>
    
    <style>
</style>