# ICEFORM 官方网站

ICEFORM 是一个基于 React 19 + Vite 的 B2B 展示型官网，用于展示注塑成型冰晶盒、冷链冰排、应用方案、工艺能力和询价入口。

## 功能

- 多页面路由：首页、产品中心、应用方案、工艺能力、询价联系、404
- 产品分类、搜索和排序
- 表单必填校验、手机号/邮箱校验、重置与 mailto 兜底提交
- 页面级 SEO 标题、描述和关键词
- 移动端汉堡菜单、Footer、FAQ、资质认证和客户案例模块
- 非首屏图片懒加载

## 开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
npm run preview
```

## 目录

```text
src/
  components/  通用组件
  data/        产品、方案、FAQ 等静态数据
  pages/       页面级组件
  App.jsx      路由与全局布局
  styles.css   全局样式
tools/
  extract_attendance_summary.py  考勤统计 CLI 工具
```

## 考勤工具

```bash
python tools/extract_attendance_summary.py path/to/source.xlsx -o outputs/summary.xlsx
```
