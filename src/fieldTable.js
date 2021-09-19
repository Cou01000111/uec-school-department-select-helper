const ALL_FIELD_LIST =
    "生体計測工学 バイオシステム・分子生物学 生命情報科学・神経科学 固体物理・低温物性 光情報工学 レーザー科学 光化学 電子・磁気・光材料 電子デバイス・光デバイス 半導体・超伝導体 物質科学・機能材料科学 量子工学 ナノテクノロジー 資源・環境・エネルギー 知的生産システム 熱・流体工学 材料・加工 知能機械 機械科学 ロボット工学 計算物理・計算科学 制御工学 光・電磁波工学 電子回路・集積回路 宇宙環境情報 衛星・移動通信 通信ネットワーク ゲーム情報学 ハイパフォーマンスコンピューティング コンピュータシミュレーション 数理科学・応用数理一 感性情報学 バーチャルリアリティ マルチメディア 画像工学 音響・音声工学 システム工学 コンピュータネットワーク 情報理論 知識工学・人工知能 ヒューマンインタフェース ソフトウェア工学 計算機科学 アルゴリズム コンピュータグラフィックス 情報セキュリティー オペレーションズ・リサーチ 経営情報・金融工学 経営工学・信頼性工学 メディアデザイン"
    .split(" ")
    .reverse();

const SCHOOL_LIST = new Map([
    ['class1', { name: "I類", color: 'pink' }],
    ['class2', { name: "II類", color: 'blue' }],
    ['class3', { name: "III類", color: 'light-green' }],
    ['advancedEngineeringBasicCourse', { name: "先端工学基礎課程", color: 'purple' }]
]);

const DEPARTMENT_TABLE = [
    { key: "mediaInformationScience", name: "メディア情報学", school: SCHOOL_LIST.get('class1'), bitList: [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    { key: "runningSocialInformationScience", name: "経営・社会情報学", school: SCHOOL_LIST.get('class1'), bitList: [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] },
    { key: "informationMathematicalStudies", name: "情報数理工学", school: SCHOOL_LIST.get('class1'), bitList: [0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0] },
    { key: "computerScience", name: "コンピュータサイエンス", school: SCHOOL_LIST.get('class1'), bitList: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    { key: "securityInformationScience", name: "セキュリティ情報学", school: SCHOOL_LIST.get('class2'), bitList: [0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    { key: "informationCommunicatingEngineering", name: "情報通信工学", school: SCHOOL_LIST.get('class2'), bitList: [0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0] },
    { key: "electronicInformationScience", name: "電子情報学", school: SCHOOL_LIST.get('class2'), bitList: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] },
    { key: "instrumentationControlSystem", name: "計測・制御システム", school: SCHOOL_LIST.get('class2'), bitList: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] },
    { key: "advancedRobotics", name: "先端ロボティクス", school: SCHOOL_LIST.get('class2'), bitList: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1] },
    { key: "machineSystem", name: "機械システム", school: SCHOOL_LIST.get('class3'), bitList: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    { key: "electronicEngineering", name: "電子工学", school: SCHOOL_LIST.get('class3'), bitList: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0] },
    { key: "opticalEngineering", name: "光工学", school: SCHOOL_LIST.get('class3'), bitList: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1] },
    { key: "physicalEngineering", name: "物理工学", school: SCHOOL_LIST.get('class3'), bitList: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0] },
    { key: "chemicalLifeEngineering", name: "化学生命工学", school: SCHOOL_LIST.get('class3'), bitList: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1] },
    { key: "advancedEngineeringBasicCourse", name: "先端工学基礎課程（夜間主課程）", school: "1", bitList: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
];

export { ALL_FIELD_LIST, DEPARTMENT_TABLE };
