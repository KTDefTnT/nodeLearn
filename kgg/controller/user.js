// 在路由中使用controller函数的数据
module.exports = app => ({
  detail: async ctx => {
    ctx.body = 'controller user/详情界面'
  }
})