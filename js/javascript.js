// 常用js

$(document).ready(function () {
  let plan = [
    {
      time: '05:30',
      title: '高雄機場(航廈1)',
      remark: '7:00 起飛',
      transportation: 'airplane',
      transRemark: '',
      arrive: ['高雄', '日本'],
      isCheck: false,
    },
    {
      time: '11:45',
      title: '成田機場(航廈1)',
      remark: '領車票、買午餐',
      transportation: '',
      isCheck: false,
    },
    {
      time: '13:45',
      title: 'NEX成田特快',
      remark: '13:45班次',
      transportation: '',
      isCheck: false,
    },
    {
      time: '15:11',
      title: '新宿站',
      remark: '寄放行李、記得拍照<br>南口出站',
      transportation: '',
      isCheck: false,
    },
    {
      time: '',
      title: '新宿燦路都廣場大飯店',
      remark: `確認號碼<span>4014557871</span>`,
      transportation: 'mrt',
      transRemark: 'JR山手線',
      arrive: ['新宿', '原宿'],
      isCheck: true,
    },
    {
      time: '16:00',
      title: '明治神宮',
      remark: `注意事項：<br>
      要進入鳥居前，可以先鞠躬參拜<br>
      進入參道後，走兩側，中間是神明的通道。<br>
      手水舍及參拜時步驟請參考記事本<br>
      每人先準備好五元日幣
      `,
      transportation: '',
      isCheck: false,
    },

    {
      time: '',
      title: 'AFURI拉麵',
      remark: '',
      transportation: '',
      isCheck: false,
    },
    {
      time: '',
      title: '逛竹下通-貓街-表參道-青山',
      remark: '',
      transportation: 'ginza',
      transRemark: '銀座線',
      arrive: ['表參道', '澀谷'],
      isCheck: false,
    },

    {
      time: '20:00',
      title: 'SHIBUYA SKY',
      remark: '往東口方向出站前往SHIBUYA SKY<br>20:20-20:40入場',
      transportation: 'mrt',
      transRemark: 'JR山手線',
      arrive: ['澀谷', '新宿'],
      isCheck: false,
    },

    {
      time: '',
      title: '歌舞伎町一番街',
      remark: '',
      transportation: '',
      isCheck: false,
    },
    {
      time: '',
      title: '新宿黃金街',
      remark: '昭和風酒吧',
      transportation: '',
      isCheck: false,
    },

    {
      time: '',
      title: 'Zen善 居酒屋',
      remark: '葷素都有',
      transportation: '',
      isCheck: false,
    },

    {
      time: '',
      title: '返回飯店',
      remark: '新宿燦路都廣場大飯店',
      transportation: '',
      isCheck: false,
    },
  ]
  let plan2 = [
    {
      time: '8:00',
      title: '新宿站',
      remark: `早餐6:30開始<br>領富士回遊車票`,
      transportation: '',
      isCheck: false,
    },
    {
      time: '8:30',
      title: '',
      remark: '',
      transportation: 'fuji',
      transRemark: '富士回遊7號',
      arrive: ['新宿', '富士山'],
      isCheck: false,
    },
    {
      time: '10:26',
      title: '河口湖站',
      remark: '',
      transportation: '',
      isCheck: false,
    },
    {
      time: '11:00',
      title: 'BUDGET租車店',
      remark: '',
      transportation: '',
      isCheck: false,
    },
    {
      time: '12:00',
      title: 'ほうとう (餺飥) 不動',
      remark: `午餐`,
      transportation: 'car',
      arrive: ['自駕', ''],
      transRemark: '車程11分',
      isCheck: false,
    },
    {
      time: '13:30',
      title: '新倉富士淺間神社',
      remark: ``,
      transportation: 'car',
      arrive: ['自駕', ''],
      transRemark: '車程20分',
      isCheck: false,
    },
    {
      time: '15:00',
      title: '忍野八海',
      remark: ``,
      transportation: 'car',
      arrive: ['自駕', ''],
      transRemark: '車程15分',
      isCheck: false,
    },

    {
      time: '16:30',
      title: '山中湖長池親水公園',
      remark: ``,
      transportation: '',
      isCheck: false,
    },
    {
      time: '',
      title: 'Kumonoue Fuji Hotel 雲ノ上富士ホテル',
      remark: `告知櫃檯有素食者<br>訂單編號<span>1146934252</span><br>
      晚餐:ZOO(日式) / M2(西式)`,
      transportation: '',
      isCheck: true,
    },
  ]
  let plan3 = [
    {
      time: '8:30',
      title: '出發',
      remark: '早餐7點開始',
      transportation: '',
      isCheck: false,
    },
    {
      time: '9:00',
      title: '日川時計店',
      remark: '日式街景與富士山<br>富士吉田市営本町通り駐車場',
      transportation: 'car',
      transRemark: '車程40分',
      arrive: ['自駕', ''],
      isCheck: false,
    },
    {
      time: '10:30',
      title: '富士山芝櫻祭',
      remark: '本栖湖',
      transportation: 'car',
      transRemark: '車程30分',
      arrive: ['自駕', ''],
      isCheck: false,
    },
    {
      time: '14:00',
      title: '富士大石花園平台',
      remark: '河口湖',
      transportation: 'car',
      transRemark: '車程11分',
      arrive: ['自駕', ''],
      isCheck: false,
    },
    {
      time: '15:30',
      title: 'BUDGET租車店',
      remark: '車子記得加滿油',
      transportation: '',
      isCheck: false,
    },
    {
      time: '16:30',
      title: '河口湖站',
      remark: '',
      transportation: '',
      isCheck: false,
    },
    {
      time: '16:51',
      title: '',
      remark: '',
      transportation: 'fuji',
      transRemark: '富士回遊44號',
      arrive: ['富士山', '新宿'],
      isCheck: false,
    },
    {
      time: '18:45',
      title: '新宿站',
      remark: '記得拿寄放的行李箱',
      transportation: '',
      isCheck: false,
    },
    {
      time: '19:20',
      title: '',
      remark: '',
      transportation: 'maru',
      transRemark: '丸之內線',
      arrive: ['新宿', '銀座'],
      isCheck: false,
    },
    {
      time: '19:30',
      title: '梅の花 銀座並木通店',
      remark: '',
      transportation: '',
      isCheck: false,
    },
    {
      time: '',
      title: '唐草繽紛飯店 東京八重洲',
      remark: `確認號碼<span>4147300773</span>`,
      transportation: '',
      isCheck: true,
    },
  ]

  let plan4 = [
    {
      time: '9:00',
      title: '出發',
      remark: '',
      transportation: 'asakusa',
      transRemark: '淺草線',
      arrive: ['日本橋', '淺草'],
      isCheck: false,
    },
    {
      time: '9:30',
      title: '雷門、淺草寺',
      remark: `11點前排隊<br>素食Marugoto Vegan<br>Unagi Irokawa色川<br>
      淺草小吃：<br>
      壽々喜園 抹茶冰淇淋<br>
      花月堂 菠蘿麵包<br>
      淺草九重 炸饅頭<br>
      よ兵衛 烤糯米丸子<br>
      淺草絹布丁
      `,
      transportation: 'asakusa',
      transRemark: '淺草線',
      arrive: ['淺草', '東銀座'],
      isCheck: false,
    },

    {
      time: '12:00',
      title: '歌舞伎座',
      remark: `步行到銀座通`,
      transportation: '',
      isCheck: false,
    },
    {
      time: '',
      title: '銀座 步行者天國',
      remark: ``,
      transportation: 'hibiya',
      transRemark: '日比谷線',
      arrive: ['銀座', '中目黑'],
      isCheck: false,
    },

    {
      time: '16:00',
      title: '中目黑、代官山逛逛',
      remark: `開到較晚的餐廳：</br>Caffe Michelangelo、IVY PLACE<br>開到較晚的百貨：T-site
      `,
      transportation: '',
      isCheck: false,
    },
    {
      time: '',
      title: '',
      remark: ``,
      transportation: 'toyoko',
      transRemark: '東急東橫線',
      arrive: ['代官山', '東新宿'],
      isCheck: false,
    },
    {
      time: '',
      title: '轉乘',
      remark: ``,
      transportation: 'oedo',
      transRemark: '大江戶線',
      arrive: ['東新宿', '牛込神樂坂車站'],
      isCheck: false,
    },
    {
      time: '19:00',
      title: '寺內公園 看傳統表演',
      remark: ``,
      transportation: 'tozai',
      transRemark: '東西線',
      arrive: ['神樂坂站', '大手町(東京)'],

      isCheck: false,
    },
    {
      time: '',
      title: '空之色拉麵 ',
      remark: `東京站拉麵街`,
      transportation: '',
      isCheck: false,
    },
  ]

  let plan5 = [
    {
      time: '8:20',
      title: '出發',
      remark: '買東京一日券',
      transportation: '',
      isCheck: false,
    },
    {
      time: '9:09',
      title: '東京車站',
      remark: ``,
      transportation: 'yokosuka',
      transRemark: '橫須賀線',
      arrive: ['東京', '鐮倉'],
      isCheck: false,
    },
    {
      time: '10:07',
      title: '鐮倉',
      remark: ``,
      transportation: '',
      isCheck: false,
    },

    {
      time: '10:30',
      title: '小町通',
      remark: `大佛燒<br>Tomoya Kamakurakomachi`,
      transportation: '',
      isCheck: false,
    },
    {
      time: '',
      title: '鶴岡八幡宮',
      remark: ``,
      transportation: 'enoden',
      transRemark: '江之電',
      arrive: ['鐮倉', '長谷(神奈川)'],
      isCheck: false,
    },

    {
      time: '12:00',
      title: '鎌倉大佛殿高德院',
      remark: `Woof Curry`,
      transportation: 'enoden',
      transRemark: '江之電',
      arrive: ['長谷', '鐮倉高校前'],
      isCheck: false,
    },
    {
      time: '14:30',
      title: '平交道熱門拍照地點',
      remark: `走路或搭公車前往江之島<br>公車Ｆ３：藤沢駅～江ノ島`,
      transportation: 'enoden',
      transRemark: '江之電',
      arrive: ['鐮倉高校前', '江之島'],
      isCheck: false,
    },

    {
      time: '15:45',
      title: '抵達江之島',
      remark: ``,
      transportation: '',
      isCheck: false,
    },
    {
      time: '',
      title: '江の島弁財天商店街',
      remark: ``,
      transportation: '',
      isCheck: false,
    },
    {
      time: '',
      title: '邊津宮->中津宮->奧津宮',
      remark: ``,
      transportation: '',
      isCheck: false,
    },
    {
      time: '',
      title: '稚兒之淵看夕陽',
      remark: ``,
      transportation: '',
      isCheck: false,
    },
    {
      time: '',
      title: '御成横丁(鎌倉站附近)',
      remark: `晚餐訂位8:15`,
      transportation: 'yokosuka',
      transRemark: '橫須賀線',
      arrive: ['鐮倉', '東京'],
      isCheck: false,
    },

    {
      time: '',
      title: '唐草繽紛飯店 東京八重洲',
      remark: ``,
      transportation: '',
      isCheck: false,
    },
  ]
  let plan6 = [
    {
      time: '7:30',
      title: '東京站',
      remark: '',
      transportation: '',
      isCheck: false,
    },
    {
      time: '7:55',
      title: 'NEX成田特快',
      remark: '',
      transportation: '',
      isCheck: false,
    },
    {
      time: '9:01',
      title: '成田機場（第1航廈）',
      remark: `
      伴手禮推薦：<br>
      ROYCE’生巧克力<br>
      迦納可可(黑色包裝)、抹茶(綠色包裝)、牛奶(深藍色)、苦味微甜(黑色，添加軒尼斯酒與可可)<br>
      ROYCE’洋芋薯片巧克力<br>
      薯條三兄弟<br>
      福砂屋 長崎蛋糕<br>
      小倉山莊<br>
      Press Butter Sand焦糖奶油餅<br>
      Sugar Butter Sand Tree砂糖奶油樹<br>
      茶之菓<br>
      上野風月堂 法蘭酥<br>
      KitKat宇治抹茶<br>
      TOKYO BANANA<br>
      白色戀人<br>
      銀座年輪家
      `,
      transportation: '',
      isCheck: false,
    },
    {
      time: '12:45',
      title: '高雄機場(航廈1)',
      remark: '7:00 起飛',
      transportation: 'airplane',
      transRemark: '',
      arrive: ['日本', '高雄'],
      isCheck: false,
    },
  ]

  function addPlan(target, plan) {
    let Target = document.querySelector(target)
    let planContent = ''
    if (Target !== null) {
      plan.forEach((item) => {
        let hasTime =
          item.time == ''
            ? `<p class="timeline_time">
            <span class="no_time">00:00</span>
          </p>`
            : `<p class="timeline_time">${item.time}</p>`
        let isCheck = item.isCheck ? `<h6 class="checkIn">check in</h6>` : ''
        let hasTitle = item.title == '' ? '' : `<h3>${item.title}</h3>`
        let hasRemark = item.remark == '' ? '' : `<h5>${item.remark}</h5>`
        let hasTrans =
          item.transportation == ''
            ? ''
            : `
          <div class="transportation ${item.transportation}">
            <div>
              <p>${item.arrive[0]}</p>
              ${item.arrive[1] == '' ? '' : `<p>${item.arrive[1]}</p>`}
              
            </div>
            <span>${item.transRemark}</span>
          </div>
        `
        planContent += `
          <div class="timeline_item">
            ${hasTime}
              <div class="timeline_info">
                ${isCheck}
                ${hasTitle}
                ${hasRemark}
                ${hasTrans}
              </div>
            </div>
        `
      })
      Target.innerHTML = planContent
    }
  }

  addPlan('.day01', plan)
  addPlan('.day02', plan2)
  addPlan('.day03', plan3)
  addPlan('.day04', plan4)
  addPlan('.day05', plan5)
  addPlan('.day06', plan6)
})
