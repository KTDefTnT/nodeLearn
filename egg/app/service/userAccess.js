'use strict';

const Service = require('egg').Service;

class UserAccess extends Service {
  async login(payload) {
    const { ctx, service } = this;
    if (!payload.mobile || !payload.password) {
      return { type: 'error', message: '请输入手机号码和密码进行登录！' };
    }
    let message = '您还未注册，请您先注册！';
    // 调用model层查询数据
    const userData = await ctx.model.User.findOne({ mobile: payload.mobile });
    if (userData.password !== payload.password) {
      message = '用户名或密码错误！';
    }
    if (userData) {
      const token = await service.accessToken.createToken(userData);
      return { token, message: '登录成功！' };
    }
    return { type: 'error', message };
  }
}

module.exports = UserAccess;