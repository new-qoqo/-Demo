<template>
    <div class="layout-default">
        <el-container>
            <el-header height="" style="padding : 0">
                <my-header />
            </el-header>
            <el-main style="overflow : unset;padding:0 10px 10px">
                <router-view />
            </el-main>
            <el-footer height="">
                <MyFooter />
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import MyHeader from '@/components/header/index.vue';
import MyFooter from '@/components/footer/index.vue'
export default {
    components : {
        MyHeader,
        MyFooter
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/public/layout.scss';
</style>