<script>
	export default {
		name:'ProjectCard',
        props: {
            project: Object,
        }, //props
	};//export
</script>

<template>
    <div class="card" style="width: 18rem;">
    <div class="card-header h-50 overflow-hidden d-flex justify-conten-center align-items-center">
        <img :src="project.img_path" class="card-img-top" :alt="project.title">
    </div>
    <div class="card-body d-flex flex-column align-items-start">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text flex-grow-1">{{ project.description }}</p>
        <a :href="project.link" class="btn btn-primary" target="_blank">Vai al progetto</a>
    </div>
</div>

    
</template>

<style lang="scss" scoped>

</style>