<template>
    <div id="filter" class="filter text-left p-2 m-2 font-medium">
        Filter Todo:
        <select @change="filterTodo($event)" name="" class="bg-teal-100 border-solid border border-teal-200 rounded p-1 text-lg font-medium">
            <option value="200">200</option>
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="10">10</option>
            <option value="5">5</option>
        </select>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default{
        name: 'Filter',
        data(){
            return{}
        },
        computed:{},
        methods: {
            ...mapActions(['filterTodo'])
        }
    }
</script>