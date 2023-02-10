<h1 align="center">前端常用工具函数</h1>

<p align="center">汇总常用工具函数</p>

---

## 简介

前端项目开发中，会经常使用一些工具函数，随着项目数量的增多、工具函数的增多，在每个项目里面都维护一个 util.js 会带来不少的麻烦，所以统一为一个工具函数包

## 安装使用

### 1. 安装包使用方式

安装

```shell
# npm
npm install wlxl-utils -S

# yarn
yarn add wlxl-utils -S
```

ESM 导入使用

```js
import { random } from 'wlxl-utils'
console.log(random(1, 10))
```

RequireJS 导入使用

```js
const { random } = require('wlxl-utils')
console.log(random(1, 10))
```

### 2. 网页 script 直接引入使用方式

直接拷贝 dist 下的 wlxl-utils-umd.js 到项目里面，可直接引用

```html
<!DOCTYPE html>
<html lang="en">
	<body>
		<script src="/dist/wlxl-utils-umd.js"></script>
		<script>
			console.log(dutils.random(1, 10))
		</script>
	</body>
</html>
```
