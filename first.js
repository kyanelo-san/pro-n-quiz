'use strict';


const quizs = [
  {
    question:'炭治郎(たんじろう)は町(まち)になにをうりにいってた？',
    answers:[
      '薪(まき)',
      '着物(きもの)',
      '竹(たけ)',
      '炭(すみ)'
    ],
    image:'kimetsu-header1.jpg'
    hint:'たんじろうの「たん」',
    correct:'炭(すみ)'
  },
  {
    question:'ねずこがはじめて出(で)てきたときに、おんぶしていたのはだれ？',
    answers:[
      '六太(ろくた)',
      '茂(しげる)',
      '花子(はなこ)',
      '竹雄(たけお)'
    ],
    image''
    hint:'たんじろうはろくにんきょうだい',
    correct:'六太(ろくた)'
  },
  {
    question:'山(やま)にかえるたんじろうに「おにがでるぞ」といって、いえに泊(と)めてくれたひとは？',
    answers:[
      'いちろうじいさん',
      'じろうじいさん',
      'さぶろうじいさん',
      'ゆういちろうおにいさん'
    ],
    hint:'三男⁉',
    correct:'さぶろうじいさん'
  },
  {
    question:'「いもうとをころさないでください。」というたんじろうに、富岡義勇(とみおかぎゆう)がいった「〇〇を他人(たにん)に握(にぎ)らせるな！」。〇〇にはいることばは？',
    answers:[
      'じぶんのかたな',
      'きさつよだつのけん',
      'せいさつよだつのかたな',
      'せいさつよだつのけん'
    ],
    hint:'かんじでかくと「生殺与奪の権」',
    correct:'せいさつよだつのけん'
  },
  {
    question:'うろこだきさんがつくった、きつねのお面(めん)はなんという？',
    answers:[
      'きさつのめん',
      'やくじょのめん',
      'おによけのめん',
      'やくよけのめん'
    ],
    hint:'かんじでかくと「厄除の面」',
    correct:'やくじょのめん'
  },
  {
    question:'さびとが炭治郎(たんじろう)にいった「のろい、よわい、〇〇、そんなものはおとこではない」。〇〇にはいることばは？',
    answers:[
      'おそい',
      'なきむし',
      'にぶい',
      'みじゅく'
    ],
    hint:'まだ一人前(いちにんまえ)ではないこと',
    correct:'みじゅく'
  },
  {
    question:'炭治郎(たんじろう)がさいしゅうせんべつで、ておに(おおきいおに)をやっつけたわざは、水(みず)のこきゅう　いちのかた　なに？',
    answers:[
      'みなもぎり',
      'みずぐるま',
      'りゅうりゅうまい',
      'うちしお'
    ],
    hint:'すいめんのようによこに切(き)る',
    correct:'みなもぎり'
  },
  {
    question:'炭治郎(たんじろう)の日輪刀(にちりんとう)は、なにいろにかわった？',
    answers:[
      'あか',
      'あお',
      'ピンク',
      'くろ'
    ],
    hint:'影(かげ)のいろ',
    correct:'くろ'
  },
  {
    question:'沼鬼(ぬまおに)を沼(ぬま)のなかでやっつけたわざは、水(みず)のこきゅう　ろくのかた　なに？',
    answers:[
      'みずぐるま',
      'りゅうりゅうまい',
      'ねじれうず',
      'たきつぼ'
    ],
    hint:'からだをねじる',
    correct:'ねじれうず'
  },
  {
    question:'毬(まり)をなげてくる鬼(おに)のなまえは？',
    answers:[
      'すさまり',
      'すさまる',
      'すさまろ',
      'すさみ'
    ],
    hint:'〇←これは？',
    correct:'すさまる'
  },
  {
    question:'てのひらに目(め)がある、やじるし鬼(おに)のなまえは？',
    answers:[
      'やじば',
      'はやば',
      'やはば',
      'やばは'
    ],
    hint:'さいごは「ば」',
    correct:'やはば'
  },
  {
    question:'矢琶羽(やはば)をやっつけたわざは、水のこきゅう　にのかた　かい　なに？',
    answers:[
      'よこみずぐるま',
      'たてみずぐるま',
      'よこねじれうず',
      'たてねじれうず'
    ],
    hint:'横(よこ)です',
    correct:'よこみずぐるま'
  },
  {
    question:'善逸(ぜんいつ)の苗字(みょうじ)は？',
    answers:[
      'わがつま',
      'あづま',
      'いなづま',
      'あがつま'
    ],
    hint:'「づ」ではない',
    correct:'あがつま'
  },
  {
    question:'かみなりのこきゅう　いちのかたは？',
    answers:[
      'いなづまいっせん',
      'へきれきいっせん',
      'いなびかりいっせん',
      'せいてんのへきれき'
    ],
    hint:'「へきれき」とは、きゅうにかみなりがなること',
    correct:'へきれきいっせん'
  },
  {
    question:'いのすけはなんのこきゅう？',
    answers:[
      'いのしし',
      'けもの',
      'けだもの',
      'やじゅう'
    ],
    hint:'「けもの」ではない',
    correct:'けだもの'
  },
  {
    question:'つづみ(たいこ)をつかう鬼(おに)のなまえは？',
    answers:[
      'きょうがい',
      'あすがい',
      'ぽんきち',
      'がいきょう'
    ],
    hint:'かんじでかくと「響凱」',
    correct:'きょうがい'
  },
  {
    question:'おにがだいすきな、とてもめずらしい血(ち)をなんという？',
    answers:[
      'うんち',
      'もれち',
      'まれち',
      'むれち'
    ],
    hint:'かんじでかくと「稀血」',
    correct:'まれち'
  },
  {
    question:'きょうがいをやっつけた技(わざ)は、水みずのこきゅう　くのかた　すいりゅうしぶき・なに？',
    answers:[
      '改(かい)',
      '乱(らん)',
      '流(りゅう)',
      '舞(まい)'
    ],
    hint:'コナンくんにでてくるおんなのこ',
    correct:'乱(らん)'
  },
  {
    question:'善逸(ぜんいつ)がいった「たんじろうからは、なきたくなるような〇〇がする」。〇〇にはいることはば？',
    answers:[
      'つよいおと',
      'しずかなおと',
      'やさしいおと',
      'こわいおと'
    ],
    hint:'たんじろうのせいかく',
    correct:'やさしいおと'
  },
  {
    question:'伊之助(いのすけ)の苗字(みょうじ)は？',
    answers:[
      'はしびら',
      'はしだいら',
      'はしばら',
      'やまだ'
    ],
    hint:'かんじでかくと「嘴平」',
    correct:'はしびら'
  },

];
