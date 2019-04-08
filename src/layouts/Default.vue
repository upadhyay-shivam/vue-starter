<template>
  <QLayout view="lHh Lpr lFf">
    <Header/>
    <SideMenu/>
    <QPageContainer>
      <RouterView/>
    </QPageContainer>
  </QLayout>
</template>

<script>
import { QLayout, QPageContainer } from "quasar";
import Header from "./Header.vue";
import SideMenu from "./SideMenu.vue";

export default {
  name: "LayoutDefault",
  components: {
    QLayout,
    QPageContainer,
    Header,
    SideMenu
  }
};
</script>

<style>
</style>
