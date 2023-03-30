<script>
import { RouterLink } from 'vue-router';

	export default {
    name: "ProjectCard",
    props: {
        project: Object,
    },
    components: { RouterLink }
};//export
</script>

<template>
    <div class="card" style="width: 18rem;">
    <div class="card-header h-50 overflow-hidden d-flex justify-conten-center align-items-center">
        <img :src="project.img_path" class="card-img-top" :alt="project.title">
    </div>
    <div class="card-body d-flex flex-column align-items-start">
        <h5 class="card-title">{{ project.title }}</h5>
        <p>
            <i class="fa-solid fa-tags text-primary"></i>
            {{ project.type.name }}
        </p>
        <p class="card-text flex-grow-1">{{ project.description }}</p>
        <router-link :to="{name: 'show', params: {slug: project.slug}}" class="btn btn-primary">
            Vedi dettagli
        </router-link>
    </div>
</div>

    
</template>

<style lang="scss" scoped>

</style>