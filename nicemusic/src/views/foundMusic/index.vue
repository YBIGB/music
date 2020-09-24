<template>
    <div>
        <banner></banner>
        <recommend-songs></recommend-songs>
        <!-- 下面两个组件宽度有问题 -->
        <recommend-music></recommend-music>
        <recommend-singer></recommend-singer>
        <div class="player">
            <audio :src='musicUrl' controls autoplay></audio>
        </div>
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
            return {
                musicUrl:"http://m7.music.126.net/20200925030144/81b4fb17e5fdb6f4d338269e492cd3e4/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/4059394339/2cd8/87e5/e02f/06084eaee565607d9e41cdd6e1899396.mp3",
            }
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
