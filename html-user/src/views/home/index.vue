<template>
  <div class="demo-container">
    <tiny-container style="margin: 0" pattern="fashion">
      <div class="demo-center">Main</div>
      <template #header>
        <div class="demo-center">Header</div>
      </template>
      <template #aside>
        <div class="demo-center">Aside</div>
      </template>
      <template #footer>
        <div class="demo-center">Footer</div>
      </template>
    </tiny-container>
  </div>
</template>

<script>
import { TinyContainer } from '@opentiny/vue'

export default {
  components: {
    TinyContainer
  }
}
</script>

<style scoped>
/* 删除 :root 相关的样式定义 */

.layout-demo :deep(.arco-menu-item.arco-menu-selected) {
  background-color: var(--color-primary-light-1);
  color: var(--color-primary-6);
}

.layout-demo :deep(.arco-menu-item:hover) {
  background-color: var(--color-primary-light-1);
  color: var(--color-primary-6);
}

.layout-demo {
  height: 100vh;
  background: var(--color-fill-2);
  border: 1px solid var(--color-border);
}

.layout-demo :deep(.arco-layout-sider) .logo {
  height: 32px;
  margin: 12px 8px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.layout-demo :deep(.arco-layout-sider-light) .logo {
  background: var(--color-fill-2);
}

.layout-demo :deep(.arco-layout-header) {
  height: 64px;
  line-height: 64px;
  background: var(--color-bg-3);
}

.layout-demo :deep(.arco-layout-footer) {
  height: 48px;
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  line-height: 48px;
}

.layout-demo :deep(.arco-layout-content) {
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  background: var(--color-bg-3);
}

.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}

.company-name {
  color: var(--color-text-1);
  font-size: 16px;
  font-weight: bold;
}
.option-row .tiny-radio-group {
  flex-wrap: wrap;
  height: 60px;
}
.demo-container .tiny-container {
  height: 300px;
  color: #5f6774;
  text-align: center;
  font-size: 18px;
  position: relative;
  margin-top: 24px;
}

.demo-container .tiny-container :deep(.tiny-container__header) {
  background-color: #ecf8ff;
  border: 3px solid #ffffff;
  color: #5b90af;
}

.demo-container .tiny-container :deep(.tiny-container__aside) {
  background-color: #fff0f0;
  border: 3px solid #ffffff;
  color: #d27070;
}

.demo-container .tiny-container :deep(.tiny-container__main) {
  background-color: #fffdec;
  border: 3px solid #ffffff;
  color: #b1a859;
}

.demo-container .tiny-container :deep(.tiny-container__footer) {
  background-color: #e8ffed;
  border: 3px solid #ffffff;
  color: #84a18a;
}
.demo-center {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
