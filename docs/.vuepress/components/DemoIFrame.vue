<!--
 * @Author: wedong.fu
 * @Date: 2021-08-02 14:49:39
 * @LastEditors: wedong.fu
 * @LastEditTime: 2022-03-30 17:48:21
 * @Description: 请填写简介
-->
<template >
    <div class="demo-iframe">
        <div class="title">Demo</div>
        <iframe :src="url"></iframe>
    </div>
</template>
<script>
export default {
    props:{
        compName:{
            type:String
        },
        busiName:{
            type: String
        },
        demoUrl:{
            type: String
        }
    },
    data(){
        return {
            url:''
        }
    },
    mounted() {
        if(this.demoUrl){
            this.url = this.demoUrl
        } else {
            if(this.compName){
                this.url = `http://uniui.w3c.xxx.work/#/pages/components/${this.compName}/index`
            } else if(this.busiName){
                this.url = `http://uniui.w3c.xxx.work/#/pages/business/${this.busiName}/index`

            }
        }
    },
    
}
</script>
<style >
    .title{
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        line-height: 40px;
    }
    .demo-iframe{
       
    }
  
    .demo-iframe iframe{
        border: 1px solid #eee;
        border-radius: 10px;
        width: 375px;
        height: 700px;
    }
</style>