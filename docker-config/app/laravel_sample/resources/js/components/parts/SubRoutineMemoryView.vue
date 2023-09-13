<template>
  <v-card title="サブルーチン">
      <div class="">
        <div class="order-table mt-5">
          <table width="95%" class="mx-auto" border="1">
            <tr>
              <th>番地</th>
              <th>命令</th>
            </tr>
            <tr v-for="item in subroutineMemory" :key="item.name">
              <td>{{ item.address }}</td>
              <td>{{ item.order }}</td>
            </tr>
          </table>
        </div>
          
      </div>
    </v-card>
  <!-- <v-card class="mx-auto" max-width="300">
    <v-list :items="items"></v-list>
  </v-card> -->
</template>
  
  <script>
import store from "../../store/store";

export default {
  name: "App",
  data() {
    return {
      //   program: store.state.programString,

      subroutineMemory: store.state.subroutineMemory,
      items: store.state.subroutineList
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
table {
  border-collapse: collapse;
  border: 1px solid grey; /* ボーダーのスタイルと色を設定 */
  border-width: 1px;
}

th,
td {
  border: 1px solid grey; /* ヘッダーセルとデータセルのボーダーを設定 */
  /* padding: 8px; セルの内側の余白を設定（任意） */
  border-width: 1px;
}
</style>