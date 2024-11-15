<template>
  <input type="text" class="form-control" :value="modelValue" @input="updateInpute"/>
</template>
<script>
export default {
    name: 'Input',
    props:{
        modelValue: [String, Number]
    },
    methods:{
        updateInpute(e){
            this.$emit("update:modelValue", e.target.value)
        }
    }
}
</script>
<style>
    
</style>