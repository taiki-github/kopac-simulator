<template>
  <header >
    <!-- ヘッダーのコンテンツ -->
    <v-app-bar app id="header">
      <v-toolbar-title>KOPAC simulator</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn @click="goToPage('/')">Home</v-btn>
      <v-btn @click="goToPage('/test')">About</v-btn> -->
      <!-- 他のリンクボタンを追加 -->
    </v-app-bar>
  </header>
</template>
  
  <script>
export default {
  props: {
    title: String, // 親コンポーネントからタイトルを受け取るプロパティ
  },
  methods:{
    goToPage(path){
      this.$router.push(path);
    }
  }
};
</script>
  
  <style>
#header {
  background-color: rgb(70, 70, 70);
  color: white;
  /* padding: 10px; */
}
/* header{
  padding: 10px;
} */
</style>