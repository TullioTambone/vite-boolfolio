<script>
export default{

}
</script>

<template>
    <main>
        <div class="container">
            <span class="d-block">&lt;html&gt;</span>
            <span class="d-block">&lt;body&gt;</span>
            
            <span class="d-block ms-5">&lt;h1&gt;</span>
            
            <h1 class="ms-5"> Dev</h1>
        
            <span class="d-block ms-5">&lt;/h1&gt;</span>
        
            <span class="d-block">&lt;/body&gt;</span>
            <span class="d-block">&lt;/html&gt;</span>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main{
    height: 100vh;
    width: calc(100% - 200px);
    position: absolute;
    right: 0;
    .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        span{
            font-size: 20px;
            color: rgb(68, 68, 68);
        }
        h1{
            color: white;
            font-size: 100px;
        }
    }
}
</style>