<template>
    <div class="tab">
        <!-- <el-tabs type="border-card">
            <el-tab-pane label="商品">用户管理</el-tab-pane>
            <el-tab-pane label="评价">配置管理</el-tab-pane>
            <el-tab-pane label="商家">角色管理</el-tab-pane>
        </el-tabs> -->
        <div class="tab-item">
            <router-link >商品</router-link>
        </div>
        <div class="tab-item">
            <router-link >店家</router-link>
        </div>
        <div class="tab-item">
           <router-link >评价</router-link>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped rel="stylesheet/stylus" lang="stylus">
    .tab
        display:flex
        width:100%
        height :40px
        line-height :40px
        .tab-item
            flex:auto
            text-align : center
            & > a 
                display : block 
                width: 100%
                text-decoration: none
</style>