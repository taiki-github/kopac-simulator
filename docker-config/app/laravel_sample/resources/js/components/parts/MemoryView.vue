<template>
  <v-card title="主記憶装置">
    <div class="">

      <div class="order-table ">
        <table width="95%" class="mx-auto table-style" border="1">
          <tr>
            <th>番地</th>
            <th>命令</th>
          </tr>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.address }}</td>
            <td>{{ item.order }}</td>
          </tr>
        </table>
      </div>

      <div class="order-table">
        <v-table>
          <thead>
            <tr>
              <th>番地</th>
              <th>命令</th>
            </tr>
          </thead>
            <tbody>
              <tr v-for="item in constantMemory" :key="item.name">
                <td>{{ item.address }}</td>
                <td>{{ item.content }}</td>
              </tr>
            </tbody>
        </v-table>
       
      </div>

     
        <!-- <v-card-action>
          <v-row>
            <v-btn v-on:click="d">戻る(アイコン)</v-btn>
            <v-btn v-on:click="deleteAllOrder()">全消去</v-btn>
          </v-row>
        </v-card-action> -->
    </div>
  </v-card>
</template>

<script>
import store from "../../store/store";

export default {
  name: "App",
  data() {
    return {
      //   program: store.state.programString,

      desserts: store.state.orderMemory,
      constantMemory: store.state.constantMemory,
    };
  },
  computed: {
    // step() {
    //   return this.$store.getters.step;
    // },
    programString() {
      return this.$store.getters.getProgramString;
    },
  },
  methods: {
    deleteAllOrder: function () {
      store.commit("deleteOrderMemory");
      this.$router.push("/");
    },
  },
};
</script>

<style>
.order-table{
  height: 250px;
}


table {
    border-collapse: collapse;
    border: 1px solid grey; /* ボーダーのスタイルと色を設定 */
    border-width: 1px;
  }
  
  th, td {
    border: 1px solid grey; /* ヘッダーセルとデータセルのボーダーを設定 */
    /* padding: 8px; セルの内側の余白を設定（任意） */
    border-width: 1px;
  }
</style>