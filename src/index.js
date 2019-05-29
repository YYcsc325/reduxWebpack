// require('./css/style.css');
// require('./css/style.less');

import React from 'react';
import ReactDom from 'react-dom';

import getRouter from './router/router';

ReactDom.render(getRouter(), document.getElementById('root'));

// 还需要在主要的js文件里写入下面这段代码
if (module.hot) {
    // 实现热更新
    module.hot.accept();
}