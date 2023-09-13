const orderDescription = {
    A: {
      previousString: "アキュムレータに",
      posteriorString: "番地のデータを加える",
    },
    AL: {
      previousString: "アキュムレータに",
      posteriorString: "番地のデータを加える",
    },
    S: {
      previousString: "アキュムレータから",
      posteriorString: "番地のデータを引く",
    },
    SL: {
      previousString: "アキュムレータから",
      posteriorString: "番地のデータを引く",
    },
    P: {
      previousString: "アキュムレータに",
      posteriorString: "番地のデータを読み込む",
    },
    PL: {
      previousString: "アキュムレータに",
      posteriorString: "番地のデータを読み込む",
    },
    T: {
      previousString: "アキュムレータのデータを",
      posteriorString: "番地に書き込む",
    },
    TL: {
      previousString: "アキュムレータのデータを",
      posteriorString: "番地に書き込む",
    },
    K: {
      previousString: "アキュムレータが0未満なら",
      posteriorString: "番地の命令に飛ぶ",
    },
    KL: {
      previousString: "アキュムレータが0以上なら",
      posteriorString: "番地の命令に飛ぶ",
    },
    JL: {
      previousString: "",
      posteriorString: "番地の命令に飛ぶ",
    },
    X: {
      previousString: "アキュムレータの番地部分を",
      posteriorString: "番地の番地指定部分に格納する",
    },
};


export default orderDescription;