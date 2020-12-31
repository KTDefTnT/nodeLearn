const http = require('http')
// 使用koa new Koa需要创建一个class
class Koa {
  constructor(){
    // this.middlewares = []
  }

  listen (...args) {
    const server = http.createServer(async (request, response) => {
      this.callback(request, response);
    });
    server.listen(...args);
  }

  // 实例化后存在一个use方法
  use (middleware) {
    this.callback = middleware;
  }
}

module.exports = Koa;