<template>
  <div class="mt-5" style="background-color: lightblue;">
    <v-container>
      <v-row>
        <v-col cols="8">
          <div v-for="(item, index) in dataArray" :key="index">
            {{ item }}
          </div>
          <v-card title="主記憶装置">
            <div class="py-2"></div>
            <div class="pt-2">
              <v-table height="300px">
                <thead>
                  <tr>
                    <th class="text-left">変数</th>
                    <th class="text-left">内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(value, key) in viewValuableMemory" :key="key">
                    <td>{{ key }}</td>
                    <td>{{ value }}</td>
                  </tr>
                </tbody>
              </v-table>
              <div class="order-table mt-5">
                <table width="95%" class="mx-auto scrollable-table" border="1">
                  <tr>
                    <th>番地</th>
                    <th>プログラム</th>
                    <th>説明</th>
                  </tr>
                  <tr v-for="item in viewMemory" :key="item.name">
                    <td
                      :style="{
                        background:
                          item.address === programCounter
                            ? '#A4C6FF'
                            : 'transparent',
                      }"
                      ref="listItem"
                    >
                      {{ item.address }}
                    </td>
                    <td
                      :style="{
                        background:
                          item.address === programCounter
                            ? '#A4C6FF'
                            : 'transparent',
                      }"
                    >
                      {{ item.order }}
                    </td>
                    <td
                      :style="{
                        background:
                          item.address === programCounter
                            ? '#A4C6FF'
                            : 'transparent',
                      }"
                    >
                      {{ item.description }}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="4">
          <div class="mr-5">
            <!-- <v-card title="プログラム" height="300px">
              <div class="mt-5 ml-3 mr-3">
                {{ programString }}
              </div></v-card
            > -->
            <v-card title="CPU" class="mt-5" height="500px">
              <div>アキュムレータ</div>
              <v-row class="mt-2">
                  <v-text-field
                    readonly
                  > {{ accumulator[0] }}</v-text-field>
                  <v-text-field
                    readonly
                  > {{ accumulator[1] }}</v-text-field>
              </v-row>
              <v-table>
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr v-for="item in cpu" :key="item.name">
                    <td>{{ item.register }}</td>
                    <td>{{ item.value }}</td>
                  </tr>
                </tbody>
              </v-table>
              <v-row class="card-buttons">
                <v-btn
                  fab
                  dark
                  color="primary"
                  class="mr-1"
                  v-on:click="exacOrder()"
                  >1命令実行</v-btn
                >
                <v-btn fab dark color="primary" v-on:click="storeViewMemory()"
                  >実行
                </v-btn>
              </v-row>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      programString:
        "200:0A=0,JL300,300:P400,T0A,T405,P403,X6R,P0A,A,T0A,P405,A401,T405,P405,S402,K15R,(),P6R,A401,X6R,JL5R,400:0,1,5,500,0,0,500:1,10,100,1000,10000",

      programCounter: 0,
      viewMemory: [],
      programMemory: [],
      viewValuableMemory: {
        "0A": "",
        "0B": "",
        "0C": "",
        "0E": "",
        "0F": "",
        "0H": "",
        "0I": "",
        "0J": "",
        "0K": "",
        "0M": "",
        "0N": "",
        "0P": "",
        "0Q": "",
        "0S": "",
        "0U": "",
        "0V": "",
        "0W": "",
        "0X": "",
        "0Y": "",
        "0Z": "",
      },
      convertVariablesToAddressTable: {
        "0A": 80,
        "0B": 75,
        "0C": 70,
        "0D": 74,
        "0E": 72,
        "0F": 78,
        "0H": 61,
        "0I": 68,
        "0J": 82,
        "0K": 86,
        "0M": 63,
        "0N": 62,
        "0P": 69,
        "0Q": 85,
        "0S": 76,
        "0U": 84,
        "0V": 76,
        "0W": 81,
        "0X": 79,
        "0Y": 77,
        "0Z": 73,
      },
      orderDescriptionObject: {
        A: {
          previousString: "アキュムレータに",
          posteriorString: "番地のデータを加える",
        },
        AL: {
          previousString: "アキュムレータに",
          posteriorString: "番地のデータを加える",
        },
        S: {
          previousString: "アキュムレータに",
          posteriorString: "番地のデータを加える",
        },
        SL: {
          previousString: "アキュムレータに",
          posteriorString: "番地のデータを加える",
        },
        P: {
          previousString: "アキュムレータに",
          posteriorString: "番地のデータを加える",
        },
        PL: {
          previousString: "アキュムレータに",
          posteriorString: "番地のデータを加える",
        },
        T: {
          previousString: "アキュムレータに",
          posteriorString: "番地のデータを加える",
        },
        TL: {
          previousString: "アキュムレータに",
          posteriorString: "番地のデータを加える",
        },
        K: {
          previousString: "アキュムレータに",
          posteriorString: "番地のデータを加える",
        },
        KL: {
          previousString: "アキュムレータに",
          posteriorString: "番地のデータを加える",
        },
        JL: {
          previousString: "アキュムレータに",
          posteriorString: "番地のデータを加える",
        },
        X: {
          previousString: "アキュムレータに",
          posteriorString: "番地のデータを加える",
        },
      },
      orderStrings: [],
      accumulator: ["0", "0"],
      cpu: [
        {
          register: "Rレジスタ",
          value: "",
        },
        {
          register: "Mレジスタ",
          value: "",
        },
        {
          register: "命令レジスタ",
          value: "",
        },
        {
          register: "プログラムカウンタ",
          value: this.programCounter,
        },
      ],
    };
  },
  methods: {
    storeViewMemory() {
      const dataArray = this.programString.split(",");
      let orderStartAddressNumber = 0;
      let order = "";
      let baseRelativeAddress = 0;
      let convertedOrder = "";

      // 配列をforEachループで回す
      dataArray.forEach((item) => {
        if (item.includes(":")) {
          const [key, value] = item.split(":");
          orderStartAddressNumber = key;
          baseRelativeAddress = key;
          order = value;

          // プログラム実行時に使用する初めのプログラムカウンターを設定する
          if (this.programCounter == 0) {
            this.programCounter = key;
          }
        }

        order = item.replace(/.*:/, ""); // base番地の指定部分を削除する

        if (order.match(/[a-zA-Z]/) && !order.includes("=")) {
          // 文字列の一番最後の文字がR(相対番地の表記)の時は相対番地を絶対番地に変換する
          if (order.slice(-1) == "R") {
            convertedOrder = this.convertRelativeToAbsAddress(
              baseRelativeAddress,
              order
            );
          } else {
            convertedOrder = order;
          }

          const orderDescription = this.makeOrderDescription(convertedOrder);
          // 相対番地は変換した状態でdescriptionに入れたほうがいい
          let storeStrings = {
            address: orderStartAddressNumber,
            order: order,
            description: orderDescription,
          };
          this.viewMemory.push(storeStrings);
        } else {
          let storeStrings = {
            address: orderStartAddressNumber,
            order: order,
            description: "",
          };
          convertedOrder = order;

          this.viewMemory.push(storeStrings);
        }

        // プログラムで扱うメモリは配列番号200が200番地を表している
        this.programMemory[orderStartAddressNumber] = convertedOrder;
        orderStartAddressNumber++;
      });
    },

    makeOrderDescription(item) {
      let functionAlphabet;
      // let functionName;
      let address;
      // Lが含まれているときL以前かLより後かにわける処理に変える
      if (item[1] == "L") {
        // functionName = item[0] + item[1] + "function";
        functionAlphabet = item[0] + item[1];
        address = item.substring(2);
      } else {
        // functionName = item[0] + "function";
        functionAlphabet = item[0];
        address = item.substring(1);
      }

      // let previousString = this.orderDescriptionObject["A"]["previousString"];
      // let posteriorString = this.orderDescriptionObject["A"]["posteriorString"];

      let previousString =
        this.orderDescriptionObject[functionAlphabet]["previousString"];
      let posteriorString =
        this.orderDescriptionObject[functionAlphabet]["posteriorString"];

      return previousString + address + posteriorString;
    },

    convertRelativeToAbsAddress(baseRelativeAddress, order) {
      const regex = /(\d+)/; // 数字の正規表現パターン
      const match = regex.exec(order); // 数字部分をマッチさせる
      if (match) {
        const relativeAddress = parseInt(match[0]);
        const absoluteAddress = relativeAddress + parseInt(baseRelativeAddress); // マッチした数字を取得し、数値に変換
        order = order.replace(regex, absoluteAddress); // 数字部分を置換
        order = order.replace("R", ""); // Rを消去
      }

      return order;
    },

    splitOrder(order) {
      const array = order.split(",").map((item) => item.trim());
      return array;
    },

    exacOrder() {
      let functionName;
      let address;
      let order = this.programMemory[this.programCounter];

      if (order == "()" || this.programCounter > this.programMemory.length) {
        // orderFlag = false;
        console.log("終了");
      } else if (order.includes("=")) {
        // 変数に値を格納する命令
        this.storeInVariable(order);
      } else if (/^[a-zA-Z]/.test(order)) {
        // 文字列の一番最初がアルファベットの時、命令を実行
        // Lが含まれているときL以前かLより後かにわける処理に変える
        if (order[1] == "L") {
          functionName = order[0] + order[1] + "function";
          address = order.substring(2);
        } else {
          functionName = order[0] + "function";
          address = order.substring(1);
        }

        // T命令の時はviewValuableMemoryも変更するのでここで行う
        // evalの引数に文字列を入れようとすると""が必要なため
        if (functionName == "Tfunction") {
          this.Tfunction(address);
          return;
        } else if (functionName == "TLfunction") {
          this.TLfunction(address);
          return;
        }

        // アドレス部分が変数の時の処理
        const alphabetRegex = /[a-zA-Z]/;
        if (alphabetRegex.test(address)) {
          address = this.convertVariablesToAddressTable[address];
        }

        // 文字列に対応した関数を実行
        try {
          eval("this." + functionName + "(" + address + ")");

          const elementToScroll = this.$refs.listItem[20];
          elementToScroll.scrollIntoView({ behavior: "smooth" });
        } catch (e) {
          console.error(
            "エラー：",
            this.programCounter + "番地の命令は実行できません"
          );
        }
      }
    },

    storeInVariable(order) {
      // KOPACの変数は0Aの形で表す
      // 1Aなどと記述するとA番地に格納されている内容+1を表す
      const [key, value] = order.split("=");
      this.viewValuableMemory[key] = value;
      const storeAddress = this.convertRelativeToAbsAddress[key];
      this.programMemory[storeAddress] = value;
      this.programCounter++;
    },

    Afunction(address) {
      // メモリ部分に
      const regex = /^([a-zA-Z]+)(\d+)$/;
      const matches = this.accumulator[0].match(regex);

      let alphabet;
      let number;

      if (matches) {
        alphabet = matches[1];
        number = parseFloat(matches[2]);
      } else {
        alphabet = "";
        number = parseFloat(this.accumulator);
      }
      number += parseFloat(this.programMemory[address]);
      this.accumulator[0] = alphabet + String(number);
      this.programCounter++;
      console.log("Afunction exec");
    },

    // ALfunction(address) {
    //   const regex = /^([a-zA-Z]+)(\d+)$/;
    //   const leftHalfmatches = this.accumulator[0].match(regex);
    //   const rightHalfmatches = this.accumulator[0].match(regex);

    //   let leftHalfAlphabet;
    //   let leftHalfNumber;
    //   let rightHalfAlphabet;
    //   let rightHalfNumber;

    //   if (leftHalfmatches) {
    //     leftHalfAlphabet = matches[1];
    //     leftHalfNumber = parseFloat(matches[2]);
    //   } else {
    //     leftHalfAlphabet = "";
    //     leftHalfNumber = parseFloat(this.accumulator);
    //   }

    //   if (rightHalfmatches) {
    //     rightHalfAlphabet = matches[1];
    //     rightHalfNumber = parseFloat(matches[2]);
    //   } else {
    //     rightHalfAlphabet = "";
    //     rightHalfNumber = parseFloat(this.accumulator);
    //   }

    //   leftHalfNumber += parseFloat(this.programMemory[address]);
    //   rightHalfNumber += parseFloat(this.programMemory[address + 1]);
    //   this.accumulator[0] = leftHalfAlphabet + String(leftHalfNumber);
    //   this.accumulator[0] = rightHalfAlphabet + String(rightHalfNumber);
    //   this.programCounter++;
    //   console.log("ALfunction exec");
    // },

    Sfunction(address) {
      const regex = /^([a-zA-Z]+)(\d+)$/;
      const matches = this.accumulator[0].match(regex);

      let alphabet;
      let number;

      if (matches) {
        alphabet = matches[1];
        number = parseFloat(matches[2]);
      } else {
        alphabet = "";
        number = parseFloat(this.accumulator);
      }
      number -= parseFloat(this.programMemory[address]);
      this.accumulator[0] = alphabet + String(number);
      this.programCounter++;
      console.log("Sfunction exec");
    },

    // SLfunction(address) {
    //   const regex = /^([a-zA-Z]+)(\d+)$/;
    //   const leftHalfmatches = this.accumulator[0].match(regex);
    //   const rightHalfmatches = this.accumulator[0].match(regex);

    //   let leftHalfAlphabet;
    //   let leftHalfNumber;
    //   let rightHalfAlphabet;
    //   let rightHalfNumber;

    //   if (leftHalfmatches) {
    //     leftHalfAlphabet = matches[1];
    //     leftHalfNumber = parseFloat(matches[2]);
    //   } else {
    //     leftHalfAlphabet = "";
    //     leftHalfNumber = parseFloat(this.accumulator);
    //   }

    //   if (rightHalfmatches) {
    //     rightHalfAlphabet = matches[1];
    //     rightHalfNumber = parseFloat(matches[2]);
    //   } else {
    //     rightHalfAlphabet = "";
    //     rightHalfNumber = parseFloat(this.accumulator);
    //   }

    //   leftHalfNumber -= parseFloat(this.programMemory[address]);
    //   rightHalfNumber -= parseFloat(this.programMemory[address + 1]);
    //   this.accumulator[0] = leftHalfAlphabet + String(leftHalfNumber);
    //   this.accumulator[0] = rightHalfAlphabet + String(rightHalfNumber);
    //   this.programCounter++;
    //   console.log("SLfunction exec");
    // },

    Pfunction(address) {
      this.accumulator[0] = this.programMemory[address];
      this.accumulator[1] = "0";
      this.programCounter++;
      console.log("Pfunction exec");
    },

    PLfunction(address) {
      this.accumulator[0] = this.programMemory[address];
      this.accumulator[1] = this.programMemory[address + 1];
      this.programCounter++;
      console.log("PLfunction exec");
    },

    Tfunction(address) {
      const alphabetRegex = /[a-zA-Z]/;
      console.log(address);
      if (alphabetRegex.test(address)) {
        console.log("aaa" + this.accumulator[0]);
        this.viewValuableMemory[address] = this.accumulator[0];
        address = this.convertVariablesToAddressTable[address];
      }

      this.programMemory[address] = this.accumulator[0];
      this.programCounter++;
      console.log("Tfunction exec");
    },

    TLfunction(address) {
      this.programMemory[address] = this.accumulator[0];
      this.programMemory[address + 1] = this.accumulator[1];
      this.programCounter++;
      console.log("TLfunction exec");
    },

    Xfunction(address) {
      const regex = /^([a-zA-Z]+)(\d+)$/;
      const matches = this.accumulator[0].match(regex);

      let argumentNumber;

      if (matches) {
        argumentNumber = parseFloat(matches[2]);
      } else {
        argumentNumber = this.accumulator[0];
      }

      const targetOrder = this.programMemory[address];
      const numRegex = /\d/;
      if (numRegex.test(targetOrder)) {
        this.programMemory[address] = targetOrder.replace(
          /\d+/g,
          argumentNumber
        );
      } else {
        this.programMemory[address] = targetOrder + argumentNumber;
      }
      this.programCounter++;
      console.log("Xfunction exec");
    },

    Kfunction(address) {
      if (this.accumulator[0] < 0) {
        this.programCounter = address;
      } else {
        this.programCounter++;
      }
      console.log("Kfunction exec");
    },

    KLfunction(address) {
      if (this.accumulator[0] >= 0) {
        this.programCounter = address;
      } else {
        this.programCounter++;
      }
      console.log("KLfunction exec");
    },

    JLfunction(address) {
      this.programCounter = address;
      console.log("JLfunction exec");
    },
  },

  computed: {},
};
</script>

<style>



.order-table {
  height: 250px;
  overflow: scroll;
}
.card-buttons {
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>

