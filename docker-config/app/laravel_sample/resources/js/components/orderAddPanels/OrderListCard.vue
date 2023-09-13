<template>
  <v-card class="mx-auto " >
    <v-card-title>命令一覧</v-card-title>
    <v-list class="order-list-card">
      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="メモリ操作"></v-list-item>
        </template>

        <OrderList
          icon="mdi-file-outline"
          title="読み込み"
          orderValue="P"
          previousString="アキュムレータに"
          posteriorString="番地のデータを読み込む"
        ></OrderList>

        <OrderList
          icon="mdi-pencil-outline"
          title="書き込み"
          orderValue="T"
          previousString="アキュムレータのデータを"
          posteriorString="番地に書き込む"
        ></OrderList>

        <OrderList
          icon="mdi-cog-outline"
          title="番地設定"
          orderValue="X"
          previousString="アキュムレータの番地部分を"
          posteriorString="番地の番地指定部分に格納する"
        ></OrderList>
      </v-list-group>

      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="四則演算"></v-list-item>
        </template>

        <!-- <v-list-item
          v-for="([title, icon], i) in arithmetic"
          :key="i"
          :orderValue="title"
          :title="title"
          :prepend-icon="icon"
        ></v-list-item> -->

        <OrderList
          icon="mdi-plus-outline"
          title="加算"
          orderValue="A"
          previousString="アキュムレータに"
          posteriorString="番地のデータを足す"
        ></OrderList>

        <OrderList
          icon="mdi-minus"
          title="減算"
          orderValue="S"
          previousString="アキュムレータから"
          posteriorString="番地のデータを引く"
        ></OrderList>
      </v-list-group>

      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="飛躍命令"></v-list-item>
        </template>

        <OrderList
          icon="mdi-debug-step-over"
          orderValue="J"
          title="飛躍"
          previousString=""
          posteriorString="番地の命令に飛ぶ"
        ></OrderList>

        <OrderList
          icon="mdi-application-export"
          title="条件付飛躍"
          orderValue="K"
          previousString="アキュムレータが0以上の時"
          posteriorString="番地の命令に飛ぶ"
        ></OrderList>
      </v-list-group>
      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="値格納"></v-list-item>
        </template>

        <ConstantList/>
        <VariableList/>
      </v-list-group>

      <!-- <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="高水準言語命令"></v-list-item>
        </template>

        <ForOrderList/>
        <IfOrderList/>

      </v-list-group> -->
      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="サブルーチン"></v-list-item>
        </template>
        <SumRoutine/>

       
      </v-list-group>
      <!-- <OrderList
          orderValue="()"
          title="終了"
          previousString="終了する"
          posteriorString=""
        ></OrderList> -->
        <EndOrderList/>

    </v-list>
  </v-card>
</template>
  
  <script>
import OrderList from "./OrderList.vue";
import ConstantList from "./ConstantList.vue";
import EndOrderList from "./EndOrderList.vue";
import VariableList from "./VariableList.vue";
// import ForOrderList from "./ForOrderList.vue";
// import IfOrderList from "./IfOrderList.vue";
import SumRoutine from "./SubroutineLists/SumRoutine.vue";

export default {
  name: "App",
  data() {
    return {
      // open: ["Users"],
      // memory: [
      //   ["読み込み", "mdi-file-outline"],
      //   ["書き込み", "mdi-pencil-outline"],
      //   ["番地設定", "mdi-cog-outline"],
      // ],
      // arithmetic: [
      //   ["加算", "mdi-plus-outline"],
      //   ["減算", "mdi-minus"],
      // ],
      // jump: [
      //   ["飛躍", "mdi-debug-step-over"],
      //   ["条件付飛躍", "mdi-application-export"],
      // ],
      // menu: false,
      // menu2: false,
    };
  },
  components: {
    // OrderSelectButton,
    // HelloWorld
    OrderList,
    ConstantList,
    VariableList,
    EndOrderList,
    // ForOrderList,
    // IfOrderList,
    SumRoutine
  },
  methods: {
    // addOrderString: function () {
    //   // functionの種類、長語短語、番地の三種類を引数にして文字列を生成
    //   // 配列にも格納する(vuexを利用する)
    //   console.log("aaa");
    //   this.menu = false;
    // },
  },
};
</script>
  
  <style>
  .order-list-card{
    height: 600px;
    overflow: scroll;
  }
</style>