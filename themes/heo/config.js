const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2025-09-21', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '欢迎来到我的星技空间', url: 'https://www.lijun.life' },
    { title: '了解我的历程', url: 'https://www.lijun.life' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: true,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: true,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '分享仪器',
  HEO_HERO_TITLE_2: '与光机技术',
  HEO_HERO_TITLE_3: 'lijun.life',
  HEO_HERO_TITLE_4: '项目历程',
  HEO_HERO_TITLE_5: 'SCUTUM中低分辨双通道光谱仪技术分享',
  HEO_HERO_TITLE_LINK: 'https://www.lijun.life',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: '随便逛逛',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '必看精选', url: '/tag/必看精选' },
  HEO_HERO_CATEGORY_2: { title: '热门文章', url: '/tag/热门文章' },
  HEO_HERO_CATEGORY_3: { title: '实用教程', url: '/tag/实用教程' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '天文仪器从业者',
    '光学机械爱好者',
    '技术分享博客主',
    '静坐宇宙思考者'
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '/about',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: 'https://github.com/342066025',
  HEO_INFO_CARD_ICON2: 'fab fa-github',
  HEO_INFO_CARD_URL3: 'https://www.lijun.life',
  HEO_INFO_CARD_TEXT3: '了解更多',

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'BSW',
      img_1: '/images/heo/BS.png',
      color_1: '#ffffff',
      title_2: 'CAXA',
      img_2: '/images/heo/CAXA.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'ansys',
      img_1: '/images/heo/ansys.png',
      color_1: '#1f1f1f',
      title_2: 'notion',
      img_2: '/images/heo/notion.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'Zemax',
      img_1: '/images/heo/zemax.png',
      color_1: '#1f1f1f',
      title_2: 'Python',
      img_2: '/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'matlab',
      img_1: '/images/heo/matlab.png',
      color_1: '#1f1f1f',
      title_2: 'GPT',
      img_2: '/images/heo/gpt.jpg',
      color_2: '#8f55ba'
    },
    {
      title_1: 'zetero',
      img_1: '/images/heo/zotero_256x256x32.png',
      color_1: '#f29e39',
      title_2: 'overleaf',
      img_2: '/images/heo/overleaf-icon-filled-256.png',
      color_2: '#2c51db'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/2023ffa5707c4e25b6beb3e6a3d286ede4c6071102.webp',
      color_1: '#df5b40',
      title_2: 'Rhino',
      img_2: '/images/heo/20231ca53fa0b09a3ff1df89acd7515e9516173302.webp',
      color_2: '#1f1f1f'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流渠道',
  HEO_SOCIAL_CARD_TITLE_2: '访问我的研究讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加我好友',
  HEO_SOCIAL_CARD_URL: 'https://www.researchgate.net/profile/Jun-Li-476',

  // 底部统计面板文案
  HEO_POST_COUNT_TITLE: '文章数:',
  HEO_SITE_TIME_TITLE: '建站天数:',
  HEO_SITE_VISIT_TITLE: '访问量:',
  HEO_SITE_VISITOR_TITLE: '访客数:',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_NOT_BY_AI: false, // 显示非AI写作
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
