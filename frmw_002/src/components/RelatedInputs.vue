<template>
    <div>
        <input v-model="message" placeholder="Мы связаны!" class="button fit small" />
        <input v-model="message" placeholder="Мы связаны!" class="button fit small" />
    </div>
</template>

<script>
    export default {
        props: {
            message: String
        }
    }
</script>

<style>
    input {
        width: 300px;
        padding: 10px;
        margin: 0.5em;
        color: #076b12;
        background: #effff2;
        border: none;
        border-radius: 5px;
        box-shadow: inset rgb(121, 119, 119) 0 0 3px;
    }

    input:focus {
        background: #ffffff;
        color: #660a0a;
    }
</style>