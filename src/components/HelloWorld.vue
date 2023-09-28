<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <p class="paragraph">Lorem ipsum dolor sitia, harum ratione possimus nostrum </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: '',
      required: true
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './HelloWorld.scss';
</style>
