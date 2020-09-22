<template>
    <div>
        <banner></banner>
        <recommend-songs></recommend-songs>
        <!-- 下面两个组件宽度有问题 -->
        <recommend-music></recommend-music>   
        <recommend-singer></recommend-singer>
    </div>
</template>

<script>
    import Banner from '../../components/1/banner'
    import RecommendSongs from '../../components/1/recommendSongs'
    import RecommendMusic from '../../components/1/recommendMusic'
    import RecommendSinger from '../../components/1/recommendSinger'

    export default {
        name: 'foundMusic',
        data() {
            return {}
        },
        components: {
            Banner,
            RecommendSongs,
            RecommendMusic,
            RecommendSinger
        },
        methods: {},
        mounted() {}
    }
</script>

<style></style>
