<script>
    import axios from 'axios';
	export default {
		name:'AppMain',
        methods: {
            getProjects() {
                axios.get('http://127.0.0.1:8000/api/projects')
                    .then((response)=> {
                        console.log(response.data);
                    })
            }, //getProjects
        }, //methods
        created() {
            this.getProjects();
        }, //created
	};//export
</script>

<template>
    prova
</template>

<style lang="scss" scoped>

</style>