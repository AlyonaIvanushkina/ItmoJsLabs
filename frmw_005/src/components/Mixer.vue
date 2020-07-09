<template>
    <main class="container">
        R:
        <input type="number" v-model="RValue" min="0" max="255" @change="upd">
        <input type="range" v-model="RValue" min="0" max="255" step="1" @change="upd">
        <br> G:
        <input type="number" v-model="GValue" min="0" max="255" @change="upd">
        <input type="range" v-model="GValue" min="0" max="255" step="1" @change="upd">
        <br> B:
        <input type="number" v-model="BValue" min="0" max="255" @change="upd">
        <input type="range" v-model="BValue" min="0" max="255" step="1" @change="upd">
    </main>
</template>

<script>
    export default {
        data() {
            return {
                RValue: 254,
                GValue: 184,
                BValue: 244
            };
        },
        mounted: function () {
            this.$nextTick(() => this.upd());
        },
        methods: {
            upd() {
                document.body.style.backgroundColor = "rgb(" + [this.RValue || 0, this.GValue || 0, this.BValue || 0].join(",") + ")";
            }
        }
    };
</script>

<style>
    .container {
        text-align: center;
    }

    input[type="number"] {
        width: 50px;
        display: inline-block;
        margin: 20px;
        padding: 10px;
        border: 0;
        border-radius: 10px;
        box-shadow: inset 0px 2px 6px 3px rgba(0,0,0,0.06);
    }

    input[type="number"]:focus {
        border: 1px solid black;
    }
    input[type=range] {
        display: inline-block;
        height: 5px;
        border-radius: 10px;
        margin: 36px 20px 20px;
        -webkit-appearance: none;
        position: relative;
    }
    
    input[type=range]::-webkit-slider-runnable-track {
        width: 300px;
        height: 2px;
        border: none;
        border-radius: 3px
    }
    
    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: none;
        height: 12px;
        width: 12px;
        border-radius: 510%;
        background: #141414;
        border: 2px solid #515151;
        margin-top: -5px;
        cursor: pointer
    }
    
    input[type=range]::-webkit-slider-thumb {
        box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.15)
    }
</style>