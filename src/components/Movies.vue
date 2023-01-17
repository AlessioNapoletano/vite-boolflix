<script>

export default {
    name: 'Movies',

    data() {
        return {
            emptyString: ''
        }
    },

    props: {
        image: String,
        originalTitle: String,
        title: String,
        language: String,
        star: Number
    }
}
</script>

<template>
    <article class="card">
        <div class="image">
            <img :src="image" :alt="title">
        </div>

        <div class="description">
            <h2>
                Titolo Originale: {{ originalTitle }}
            </h2>

            <h4 :class="(title === originalTitle) ? 'd-none' : ''">
                Titolo: {{ title }}
            </h4>

            <div class="icon-flag flex">
                <span>
                    lingua:
                </span>
                <img :src="language" alt="Country Flag">
            </div>


            <div class="star flex">
                <p>
                    Valutazione:
                </p>
                <p v-for="n in (Math.ceil(star / 2))">
                    <i class="fa-solid fa-star"></i>
                </p>
            </div>
        </div>
    </article>


</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables.scss' as *;

.d-none {
    display: none;
}

h1 {
    color: grey;
    font-size: 3rem;
    text-align: center;
    margin: 3rem 0;
}

.icon-flag {
    width: 100px;
    height: 25px;
    align-items: center;
    margin-bottom: 1rem;

    span {
        margin-right: 1rem;
    }

    img {
        width: 100%;
        height: 100%;
    }
}

.flex {
    display: flex;
}

i {
    color: yellow;
}

.card {
    width: calc((100% / 6) - .5rem);
    height: 350px;
    margin-right: .5rem;
    margin-bottom: 2rem;
    border: 1px solid white;
    background-color: black;

    &:hover .image {
        display: none;
    }

    .image {
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .description {
        display: none;
        color: white;
        padding: .5rem;
    }

    &:hover .description {
        display: block;
    }

    h2 {
        margin-bottom: 1rem;
    }

    h4 {
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 1rem;
    }
}
</style>