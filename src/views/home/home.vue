<style scoped lang="scss">
    .home{
        width: 100%;
        .el-body {
            width: 100%;
            height: calc(100vh - 60px);
            .el-aside {
                background-color: #d3dce6;
                text-align: center;
            }
            .el-main {
                background-color: #e9eef3;
                color: #333;
                text-align: center;
            }
        }
    }
</style>

<template>
    <div class="home">
        <el-container class="el-body">
            <el-aside width="300px">左侧导航</el-aside>
            <el-container>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
        
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

        };
    },
    components: {

    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
    watch: {

    },
};
</script>
