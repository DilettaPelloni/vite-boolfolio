<script>
    import axios from 'axios';
    import ProjectCard from './ProjectCard.vue';

	export default {
		name:'AppMain',
        data() {
            return {
                projects: [],
                currentPage: 1,
                lastPage: 1,
            }
        }, //data
        components: {
            ProjectCard,
        }, //components
        methods: {
            getProjects() {
                axios.get('http://127.0.0.1:8000/api/projects',{
                    params: {
                        page: this.currentPage,
                    }
                }).then((response)=> {
                        this.projects = response.data.projects.data;
                        this.lastPage = response.data.projects.last_page;
                    })
            }, //getProjects
            changePage(page) {
                this.currentPage = page;
                this.getProjects();
            }, //changePage
            prevPage(){
                if(this.currentPage > 1) {
                    this.currentPage --;
                    this.getProjects();
                }
            }, //prevPage
            nextPage(){
                if(this.currentPage != this.lastPage) {
                    this.currentPage ++;
                    this.getProjects();
                }
            }, //nextPage
        }, //methods
        created() {
            this.getProjects();
        }, //created
	};//export
</script>

<template>
    <div class="container py-5 vh-100">
        <h1>Progetti</h1>
        <div class="row g-4 mt-3 h-50">
            <div class="col" v-for="project in projects">
                <ProjectCard :project="project" class="h-100"/>
            </div>
        </div>
        <nav class="mt-5">
            <ul class="pagination justify-content-center">
                <li
                    class="page-item"
                    :class="{disabled: currentPage == 1}"
                >
                    <button
                        class="page-link"
                        @click="prevPage"
                    >
                        Previous
                    </button>
                </li>
                <li
                    class="page-item"
                    :class="{active: i == currentPage}"
                    v-for="i in lastPage"
                >
                    <button
                        class="page-link"
                        @click="changePage(i)"
                    >
                        {{ i }}
                    </button>
                </li>
                <li
                    class="page-item"
                >
                    <button
                        class="page-link"
                        :class="{disabled: currentPage == lastPage}"
                        @click="nextPage"
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>

</style>