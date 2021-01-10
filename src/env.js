/* eslint-disable no-undef */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-var */
/* eslint-disable import/prefer-default-export */
const dev = {
  baseURL: 'http://localhost:3000', // 开发环境
};

const pro = {
  baseURL: 'http://www.towardsky.top/api', // 线上环境
};

var env;
switch (process.env.NODE_ENV) {
  case 'development':
    env = dev;
    break;
  case 'production':
    env = pro;
    break;
  default:
    env = dev;
    break;
}

console.log('👹', process.env.NODE_ENV);
export { env };
