# VUE GotopButton

## 安装

```
npm i vue-gototop-button
```

## 引入

全局引入
```js
// main.js
import { createApp } from 'vue'
import { gtbutton } from 'vue-gototop-button'
import App from './App.vue'
// ...
createApp(App).use(gtbutton).mount('#app')
```
局部引入
```html
<script setup>
import { GoTopBtn } from 'vue-gototop-button'
</script>
```

## 使用
```html
<template>
    <GoTopBtn :top="20">
        <p>↑</p>
    </GoTopBtn>
</template>
```

## 参数

| 属性名 | 说明 |
|------|----|
| top | 当屏幕滚动小于该值时显示按钮 | 

## 修改 css
在`node_modules/vue-gototop-button/GoTopButton.css`修改

默认值：
```css
button{
    position: fixed;
    right: 50px;
    bottom: 50px;
}
```
