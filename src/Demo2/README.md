React 热加载示例
=====================

此项目实演示了修改代码后，在无需重新编译的情况下，浏览器自动加载差异数据并刷新页面。

项目中的jsx文件最终会打包编译输出到wwwroot/app/bundle.js中，并产生对应的js.map文件。
如果要修改输出路径请修改webpack.config.js中的output参数。

注意，此例中JSX只能使用ES-2015规范的语法编写。

### 使用方法

在项目根目录下，执行：
```
npm install
npm start
F5 运行程序
访问 http://localhost:8000/index.html
```

现在编辑 "app/content.jsx" 或者"app/footer.jsx"的内容，在Visual Studio中保存后切换到浏览器观察，不需要刷新就能看到刚刚修改的内容会立即展现出来。
从这段视频中可以看出效果 [this video](http://vimeo.com/100010922).


