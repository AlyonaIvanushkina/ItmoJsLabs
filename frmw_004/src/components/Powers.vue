<template>
    <div class="wrapper">
        <button @click="inc() + upd()" class="c-button">+1</button>
        <input type="text" :placeholder='[[ counter ]]' v-model.number="counter" v-on:keyup="upd" @change="upd"/>
        <div v-for="(value) in list" v-bind:key="value" class="pws">
            <h3>
                <span>{{2}}</span>
                <sup>{{ value }}</sup>= {{2 ** value}}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counter: Math.floor(Math.PI),
                list: [0, 1, 2]
            };
        },
        methods: {
            inc() {
                this.counter++;
            },
            upd() {
                const id = this.counter + 1;
                this.list = Array.apply(null, {
                    length: id
                }).map(Number.call, Number);
                console.log(this.list);
            }
        }
    };
</script>

<style>
    input {
        width: 50%;
        display: inline-block;
        margin: 20px;
        padding: 10px;
        border: 0;
        border-radius: 10px;
        box-shadow: inset 0px 2px 6px 3px rgba(0,0,0,0.06);
    }

    input:focus {
        border: 1px solid black;
    }

    .c-button {
        min-width: 50px;
        display: inline-block;
        margin: 20px auto;
        font-family: inherit;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: 0;
        border-radius: 5px;
        background: #4676d7;
        color: #fff;
        padding: 8px 16px;
        font-size: 1rem;
        cursor: pointer;
    }

    .c-button:hover {
        background: #1d49aa;
    }
    
    .c-button:focus {
        outline: none;
        box-shadow: 0 0 0 4px #cbd6ee;
    }
    .pws {
        display: inline-block;
        margin: 10px 15px;
        border-radius: 10px;
        padding: 0 15px;
        box-shadow: rgb(226, 221, 221) 0 0 5px 1px;
    }
</style>