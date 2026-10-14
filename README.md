# 医院智慧安全管理系统原型

本仓库独立保存安全系统原型与配套文档。原型 v2.4 支持 PC 管理端和微信小程序端切换，页面数据均为演示数据。

## 在线预览

GitHub Pages 启用后的入口：

[打开安全系统原型](https://13798489127.github.io/logistics-analysis-prototype/)

仓库根目录的 `index.html` 自动跳转到 `原型_医院智慧安全管理系统_v2.html`，也保留可点击链接。

首次启用：在仓库 **Settings → Pages** 中选择 **Deploy from a branch**，分支选择 **main**，目录选择 **/(root)**，保存。之后推送到 `main` 会更新预览。

私有仓库使用 GitHub Pages 需要账户计划支持；如果设置页提示升级，请先确认所需计划。

## 本地预览与测试

原型是单文件 HTML，无外部资源或新增依赖，可以直接用浏览器打开。

也可以在仓库根目录运行：

```sh
pnpm preview
```

然后访问 <http://localhost:8080>。此命令使用本机 Python 3 静态服务器。

验证入口路径、原型脚本语法和 Pages 文件配置：

```sh
pnpm test
```

## 来源

- 原仓库：<https://gitee.com/DMysq/logistics-management.git>
- 分支：`feature/safety-phase1`
- 提交：`d197c4f`
- 原目录：`docs/safety-planning/`
- 原目录内全部 14 个文件均保留在本仓库根目录，内容未修改。

配套文档从 `00_项目资产索引与迁移说明.md` 开始阅读。
