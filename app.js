// 引用依赖
var express = require('express');
var proxy = require('http-proxy-middleware');

// proxy 中间件的选择项
var options = {
        target: 'https://www.easy-mock.com', // 目标服务器 host
        changeOrigin: true,               // 默认false，是否需要改变原始主机头为目标URL
        ws: true,                         // 是否代理websockets
        pathRewrite: {
			'^/inteGration/hardwareControl/api' : '/mock/5b6eaead121e7e30aea261d2/ytjhard'  ,  
			'^/inteGration/api' : '/mock/5b97bc01a7e9571f105d3ddd/ytj'
        },
    };

// 创建代理
var exampleProxy = proxy(options);

// 使用代理
var app = express();
    app.use('/', exampleProxy);
    app.listen(7999);