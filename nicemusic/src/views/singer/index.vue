<template>
    <div>
        <singer-key></singer-key>

        <recommend-singer></recommend-singer>
    </div>
</template>

<script>
    import singerKey from '../../components/1/singerKey'
    import RecommendSinger from '../../components/1/recommendSinger'

    export default {
        name: 'singer',
        data() {
            return {}
        },
        components: {
            singerKey,
            RecommendSinger
        },
        methods: {},
        mounted() {}
    }
</script>

<style></style>

