<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0" @click="FirP">
      <img style="width: 100px; height: 50px" src="/favicon.ico" alt="SarMioe logo" />
    </el-menu-item>
    <el-menu-item index="0-0" @click="FirP">Home</el-menu-item>
    <el-sub-menu index="1">
      <template #title>Social Medias</template>
      <el-menu-item index="1-2" @click="Github">Github</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>My Projects</template>
      <el-menu-item index="2-1" @click="xes">XES</el-menu-item>
      <el-sub-menu index="2-2">
        <template #title>tkkhs</template>
        <el-menu-item index="2-2-1" @click="tkkhsp">Code</el-menu-item>
        <el-menu-item index="2-2-2" @click="tkkhs">Test in this page</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="2-3" @click="cfs">Code of this site</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>Golang Projects</template>
        <el-menu-item index="2-4-1" @click="MoSIUTER">MoSIUTER</el-menu-item>
        <el-menu-item index="2-4-2" @click="ezgo">ezgo</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>Speedtest</template>
      <el-menu-item index="3-1" @click="tyo">Tokyo , Japan</el-menu-item>
      <el-menu-item index="3-2" @click="lacus">Los Angeles , California , US</el-menu-item>
      <el-menu-item index="3-3" @click="cf">Globle , Cloudflare CDN</el-menu-item>
      <el-menu-item index="3-4" @click="cfsp">Code of speedtest site</el-menu-item>
    </el-sub-menu>
  </el-menu>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeIndex = ref('0')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const Github = () => {
  window.open('https://github.com/sarmioe', '_blank')
}
const tkkhsp = () => {
  window.open('https://github.com/sarmioe/tkkhs', '_blank')
}
const tkkhs = () => {
  router.push('/tkkhs')
}
const FirP = () => {
  router.push('/')
}
const xes = () => {
  window.open(
    'https://github.com/sarmioe/xes?tab=readme-ov-file#the-xes-operating-system',
    '_blank',
  )
}
const cfs = () => {
  window.open('https://github.com/sarmioe/867678.xyz', '_blank')
}
const cfsp = () => {
  window.open('https://github.com/sarmioe/servers', '_blank')
}
const MoSIUTER = () => {
  window.open('https://github.com/sarmioe/mosiuter', '_blank')
}
const ezgo = () => {
  window.open('https://github.com/sarmioe/ezgo', '_blank')
}
const tyo = () => {
  window.open('https://jp.867678.xyz:82/', '_blank')
}
const lacus = () => {
  window.open('https://us.867678.xyz:82/', '_blank')
}
const cf = () => {
  window.open('https://s.867678.xyz/speedtest', '_blank')
  router.push('/spt')
}
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>
