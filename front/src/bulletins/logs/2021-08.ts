import { ILog } from "@/store/modules/interface/bulletin";

export const logs: ILog[] = [
  {
    date: "2021-12-16 18:00:00",
    title: "更新公告(2021-12-16)",
    briefContent: `<p>1. 优化音量调节交互效果</p><p>2. 添加音乐播放进度调整</p>`,
    content: `<p>1. 优化音量调节交互效果</p><p>2. 添加音乐播放进度调整</p>`,
  },
  {
    date: "2021-12-09 08:00:00",
    title: "更新公告(2021-12-09)",
    briefContent: `<p>1. 修复打包失败的问题，添加一个国内访问地址（无需翻墙，不卡顿）和一个国外访问地址（实时同步，未翻墙会卡顿）</p>`,
    content: `<p>1. 修复打包失败的问题，添加一个国内访问地址（无需翻墙，不卡顿）和一个国外访问地址（实时同步，未翻墙会卡顿）</p>`,
  },
  {
    date: "2021-12-08 08:00:00",
    title: "更新公告(2021-12-08)",
    briefContent: `<p>1. 添加视频-视频列表页面，引入“vue-query”管理服务端缓存，减少页面请求次数</p>`,
    content: `<p>1. 添加视频-视频列表页面，引入“vue-query”管理服务端缓存，减少页面请求次数</p>`,
  },
  {
    date: "2021-10-30 16:10:00",
    title: "更新公告(2021-10-30)",
    briefContent: `<p>1. 歌曲详情的添加歌词翻译、歌词作者、翻译作者</p>`,
    content: `<p>1. 歌曲详情的添加歌词翻译、歌词作者、翻译作者</p>`,
  },
  {
    date: "2021-10-30 01:20:00",
    title: "更新公告(2021-10-30)",
    briefContent: `<p>1. 修复错误提示不准确的问题</p><p>2. 新增首页每日歌曲推荐</p>`,
    content: `<p>1. 修复错误提示不准确的问题</p><p>2. 新增首页每日歌曲推荐</p>`,
  },
  {
    date: "2021-10-24 19:47:00",
    title: "更新公告(2021-10-24)",
    briefContent: `<p>1. 把查看歌词的歌曲详情修改为切换显现，还原网易云客户端的显示方式</p>`,
    content: `<p>1. 把查看歌词的歌曲详情修改为切换显现，还原网易云客户端的显示方式</p>`,
  },
  {
    date: "2021-10-08 08:00:00",
    title: "更新公告(2021-10-08)",
    briefContent: `<p>1. 优化了一些交互细节，移除了控制台的调试打印日志</p>`,
    content: `<p>1. 优化了一些交互细节，移除了控制台的调试打印日志</p>`,
  },
  {
    date: "2021-10-06 22:00:00",
    title: "更新公告(2021-10-06)",
    briefContent: `<p>1. 新增了系统更新日志，通过日志可以查看每次发布版本的更新内容</p>`,
    content: `<p>1. 新增了系统更新日志，通过日志可以查看每次发布版本的更新内容</p>`,
  },
  {
    date: "2021-09-29 22:00:00",
    title: "更新公告(2021-09-29)",
    briefContent: `<p>1. 完成了全局的歌曲搜索功能</p>`,
    content: `<p>1. 完成了全局的歌曲搜索功能</p>`,
  },
  {
    date: "2021-09-28 22:00:00",
    title: "更新公告(2021-09-28)",
    briefContent: `<p>1. 部分完成了全局的歌曲搜索功能</p>`,
    content: `<p>1. 部分完成了全局的歌曲搜索功能</p>`,
  },
  {
    date: "2021-09-18 22:00:00",
    title: "更新公告(2021-09-18)",
    briefContent: `<p>1. 移除了项目中使用vue-cli创建的前端项目，替换为vite创建的前端项目</p>`,
    content: `<p>1. 移除了项目中使用vue-cli创建的前端项目，替换为vite创建的前端项目</p>`,
  },
  {
    date: "2021-09-17 22:00:00",
    title: "更新公告(2021-09-17)",
    briefContent: `<p>1. 新增了MV详情页面</p><p>2. 修复了路由切换是异常的错误提示</p><p>3. 引入tailwind css开发了个别功能</p>`,
    content: `<p>1. 新增了MV详情页面</p><p>2. 修复了路由切换是异常的错误提示</p><p>3. 引入tailwind css开发了个别功能</p>`,
  },
  {
    date: "2021-09-09 22:00:00",
    title: "更新公告(2021-09-09)",
    briefContent: `<p>1. 新增了独家放送页面</p>`,
    content: `<p>1. 新增了独家放送页面</p>`,
  },
  {
    date: "2021-09-08 22:00:00",
    title: "更新公告(2021-09-08)",
    briefContent: `<p>1. 新增了MV详情页面（初版）</p>`,
    content: `<p>1. 新增了MV详情页面（初版）</p>`,
  },
  {
    date: "2021-09-03 22:00:00",
    title: "更新公告(2021-09-03)",
    briefContent: `<p>1. 新增了播放顺序功能（随机播放、单曲播放等等）</p>`,
    content: `<p>1. 新增了播放顺序功能（随机播放、单曲播放等等）</p>`,
  },
  {
    date: "2021-08-30 22:00:00",
    title: "更新公告(2021-08-30)",
    briefContent: `<p>1. 新增了歌手详情页面</p><p>2. 更新了全局所有图片未加载完毕时代替图的样式</p>`,
    content: `<p>1. 新增了歌手详情页面</p><p>2. 更新了全局所有图片未加载完毕时代替图的样式</p>`,
  },
  {
    date: "2021-08-28 22:00:00",
    title: "更新公告(2021-08-28)",
    briefContent: `<p>1. 修复了一些交互bug</p><p>2. 根据volar修复了所有类型错误</p>`,
    content: `<p>1. 修复了一些交互bug</p><p>2. 根据volar修复了所有类型错误</p>`,
  },
  {
    date: "2021-08-23 22:00:00",
    title: "更新公告(2021-08-23)",
    briefContent: `<p>1. 新增页面歌手排行榜</p><p>2. 修复最新音乐页面，点击无法播放的问题</p>`,
    content: `<p>1. 新增页面歌手排行榜</p><p>2. 修复最新音乐页面，点击无法播放的问题</p>`,
  },
  {
    date: "2021-08-19 22:00:00",
    title: "更新公告(2021-08-19)",
    briefContent: `<p>1. 优化了所有请求的图片资源的大小，避免持续下载图片造成卡顿</p><p>2. 修复了歌单中没有歌曲、没有收藏者时没有提示的问题</p>`,
    content: `<p>1. 优化了所有请求的图片资源的大小，避免持续下载图片造成卡顿</p><p>2. 修复了歌单中没有歌曲、没有收藏者时没有提示的问题</p>`,
  },
  {
    date: "2021-08-17 22:00:00",
    title: "更新公告(2021-08-16)",
    briefContent: `<p>1. 新增页面最新音乐-新碟上架；</p><p>2. 移除了部分重复定义的接口；</p><p>3. 最新音乐-新碟上架，添加自定义分页；</p>`,
    content: `<p>1. 新增页面最新音乐-新碟上架；</p><p>2. 移除了部分重复定义的接口；</p><p>3. 最新音乐-新碟上架，添加自定义分页；</p>`,
  },
  {
    date: "2021-08-16 22:00:00",
    title: "更新公告(2021-08-16)",
    briefContent: `<p>1. 新增页面最新音乐-新歌速递；</p>`,
    content: `<p>1. 新增页面最新音乐-新歌速递；</p>`,
  },
  {
    date: "2021-08-13 22:00:00",
    title: "更新公告(2021-08-13)",
    briefContent: `<p>1. 新增全局的更新公告弹窗组件，显示简略公告信息；</p>
    <p>2. 新增全局公告导航，显示公告列表和更详细信息；</p>`,
    content: `<p>1. 新增全局的更新公告弹窗组件，显示简略公告信息；</p>
    <p>2. 新增全局公告导航，显示公告列表和更详细信息；</p>`,
  },
];
