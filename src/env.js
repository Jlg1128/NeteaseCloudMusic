const dev = {
  baseURL: 'http://localhost:3000', //开发环境
};

const pro = {
  baseURL: 'http://175.24.120.38:3000', // 线上环境
};

let env = pro;

export { env };
