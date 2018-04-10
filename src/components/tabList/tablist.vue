<template>
    <div class="tab">
        <!-- <el-tabs type="border-card">
            <el-tab-pane label="商品">用户管理</el-tab-pane>
            <el-tab-pane label="评价">配置管理</el-tab-pane>
            <el-tab-pane label="商家">角色管理</el-tab-pane>
        </el-tabs> -->
        <div class="tab-item">
            <router-link to="/food">商品</router-link>
        </div>
        <div class="tab-item">
            <router-link to='/seller'>店家</router-link>
        </div>
        <div class="tab-item">
           <router-link to='/ratings'>评价</router-link>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped rel="stylesheet/stylus" lang="stylus">
@import "../../common/stylus/index.styl"
.tab
    display:flex
    width:100%
    height :40px
    line-height :40px
    margin-bottom :20px
    border1px(#909399)
    .tab-item
        flex:auto
        text-align : center
        & > a 
            display : block 
            width: 100%
        & .tab-active
                color:red
</style>