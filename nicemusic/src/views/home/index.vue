<template>
    <div>
        <headerBar></headerBar>
        <router-view></router-view>
        <footerBar></footerBar>
    </div>
</template>

<script>

import headerBar from '../../components/4/headerBar'
import footerBar from '../../components/4/footerBar'
export default {
    name:'home',
    components:{
        headerBar,
        footerBar
    }
}
</script>