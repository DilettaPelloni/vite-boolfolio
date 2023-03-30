<script>
    import axios from 'axios';

	export default {
		name:'AppShow',
        data() {
            return {
                project: null,
            }
        }, //data
        methods: {
            getProject() {
                axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
                    .then((response)=> {
                        if(response.data.project) {
                            this.project = response.data.project;
                        }
                        // else {
                        //     this.$router.push({name: 'not-found'});
                        // }
                    })
            }, //getProject
        }, //methods
        created() {
            this.getProject();
        }, //created
	};//export
</script>

<template>
    <div class="container py-5 vh-100">
        <h1>{{ project.title }}</h1>
        <img :src="project.img_path" :alt="project.title" class="mb-3">
        <p>
            <i class="fa-solid fa-tags text-primary"></i>
            {{ project.type.name }}
        </p>
        <p>{{ project.description }}</p>
        <div class="tags">
            <span
                class="badge rounded-pill text-bg-primary me-1"
                v-for="technology in project.technologies"
            >
                {{ technology.name }}
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    img {
        height: 300px;
    }
</style>