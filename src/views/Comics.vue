<template>
  <div class="comics">
    <Characters />
  </div>
</template>

<script>
// @ is an alias to /src
import Characters from '@/components/Comics.vue'

export default {
  name: 'comics',
  components: {
      Comics
  },
}
</script>
