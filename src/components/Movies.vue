<script>
export default {
    name: 'Movies',
    props: {
        originalTitle: String,
        title: String,
        language: String,
        valutation: String,
    }
}
</script>

<template>
    <article>
        <h2>
            Titolo Originale: {{ originalTitle }}
        </h2>
        <h3>
            Titolo: {{ title }}
        </h3>

        <p>
            Lingua: {{ language }}
        </p>

        <p>
            Voto: {{ valutation }}
        </p>
    </article>
</template>

<style lang="scss" scoped>

</style>