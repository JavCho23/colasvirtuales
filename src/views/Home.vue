<template>
  <div class="home">
    <QueueList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import QueueList from '@/components/QueueList.vue'

export default {
  name: 'Home',
  components: {
    QueueList
  }
}
</script>
