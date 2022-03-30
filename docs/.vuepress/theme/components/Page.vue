<template>
  <main class="page">
    <slot name="top" />
    <div class="theme-default-content component-basic">
      <div class="detail">
        <Content slot-key="detail" />
      </div>
      <div class="side-demo">
        <Content slot-key="side-demo" />
      </div>
    </div>
    <Content class="theme-default-content" />
    <PageEdit />
    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@vuepress/theme-default/components/PageEdit.vue'
import PageNav from '@vuepress/theme-default/components/PageNav.vue'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-top 3.6rem
  padding-bottom 2rem
  display block
.component-basic
  display flex
  padding-top 100px
.detail
  flex 1
.side-demo
  width 375px
  margin-left 20px

</style>
