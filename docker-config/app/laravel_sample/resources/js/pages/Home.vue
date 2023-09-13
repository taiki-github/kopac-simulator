<template>
  <v-row>
    <v-col cols="3">
      <OrderListCard></OrderListCard>
    </v-col>
    <v-col cols="9" class="mt-2">
      <div >
        <v-card title="プログラム" >
          <div class="mt-5 ml-3 mr-3">
            {{ programString }}{{ subroutineProgramString
            }}{{ constantProgramString }}
          </div>

          <v-card-action class="mr-1">
            <ExecPopup />
          </v-card-action>
        </v-card>
      </div>

      <v-row class="mt-3">
        <v-col cols="8">
          <MemoryView />
        </v-col>
        <v-col cols="4">
          <SubRoutineMemoryView/>
        </v-col>
      </v-row>
      <!-- <MakeProgramButton /> -->
      
    </v-col>
  </v-row>
</template>
  
  <script>
// import OrderGroupPanel from "./components/OrderGroupPanel.vue";
import OrderListCard from "../components/orderAddPanels/OrderListCard.vue";
// import MemoryView from "../components/parts/MemoryView.vue";
import MemoryView from "../components/parts/MemoryView.vue";
import SubRoutineMemoryView from "../components/parts/SubRoutineMemoryView.vue";
// import MakeProgramButton from "../components/MakeProgramButton.vue";
import ExecPopup from "../components/ExecPopup.vue";
import store from "../store/store";

// import OrderSelectButton from './components/OrderSelectButton.vue';
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  data() {
    return {
      //   program: store.state.programString,

      dialogVisible: false,
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
    subroutineProgramString() {
      return this.$store.getters.getSubroutineProgramString;
    },
    constantProgramString() {
      return this.$store.getters.getConstantProgramString;
    },
  },
  components: {
    // OrderGroupPanel,
    OrderListCard,
    MemoryView,
    SubRoutineMemoryView,
    // MakeProgramButton,
    ExecPopup,
    // HelloWorld
  },
};
</script>
  
  <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  background-color: rgb(54, 53, 53);
  width: 100%;
  height: 100%;
}

.card-buttons {
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>
  