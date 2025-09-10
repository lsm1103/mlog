# edoc

#### 演示

[演示](http://edoc.eui6.com)

#### 介绍

基于 svelte 开发的文档工具，只需要编写 markdown 文件，即可生成在线文档。

#### 安装教程

```
// 拉取代码
git clone https://gitee.com/suruibuas/edoc.git
// 进入目录
cd edoc
// 安装依赖
npm i --legacy-peer-deps
```

#### 撰写

```
npm run dev
```

#### 打包

```
npm run build
```

#### 使用说明

进入 src/md 目录创建 markdown 文档，目录或者.md 文档前加上序号（1、），左侧栏的目录会按照该序号进行排序

- src
  - md
    - 1、开始
      - 1、概述.md
      - 2、分析.md
    - 2、客户端
      - 1、JAVA.md
      - 2、GO.md
      - 3、PHP.md
      - 4、PYTHON.md

相关配置文件在：`src/config.js` 中

#### 部署指南

1. **Node.js 版本要求**
   - 最佳兼容版本：Node.js 14.x-16.x
   - 如果使用较新版本的 Node.js (v18+)，需要修改依赖版本：
     ```
     // 在 package.json 中
     "svelte": "^3.59.2",
     "vite": "^4.4.9",
     "@sveltejs/vite-plugin-svelte": "^2.4.5"
     ```
   - 安装依赖时使用 `--legacy-peer-deps` 标志解决依赖冲突

2. **平台兼容性注意事项**
   - 在 Linux/Unix 系统上部署时，请确保 create.js 文件中使用的是正确的路径分隔符：
     ```js
     const nowDir = `${dir}/${item}`; // 使用 / 而不是 \
     ```

3. **构建和部署步骤**
   ```
   // 安装依赖
   npm install --legacy-peer-deps
   
   // 构建项目
   npm run build
   
   // 部署 dist 目录
   ```

4. **部署选项**
   - 您可以使用 Nginx、Apache 或其他 Web 服务器部署 dist 目录内容
   - 也可以使用简单的静态文件服务器：
     ```
     // 使用 Node.js 的 serve 包
     npm install -g serve
     serve -s dist
     
     // 或使用 Python 内置的 HTTP 服务器
     cd dist
     python -m http.server 8000
     ```

5. **常见问题解决**
   - 如遇到 "component_api_invalid_new" 错误，请降级 Svelte 至 3.x 版本
   - 如遇到 "Unrecognized option 'hmr'" 错误，请降级 Vite 和相关插件

默认情况下，项目在 `http://localhost:3000` 上运行（开发模式），构建后可以通过您配置的 Web 服务器访问。

#### 交流

官方 QQ 群：651279187（未满）
