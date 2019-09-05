<template>
  <div class="characters">
    <Characters />
  </div>
</template>

<script>
// @ is an alias to /src
import Characters from '@/components/Characters.vue'

export default {
  name: 'characters',
  components: {
    Characters
  },
}
</script>
