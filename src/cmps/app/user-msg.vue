<template>
  <Transition>
    <div v-if="msg" class="user-msg">
      <p>{{ msg.txt }}</p>
    </div>
  </Transition>
</template>

<script>
import { eventBus } from '@/services/connections/eventBus.service.js'
export default {
  data() {
    return {
      msg: null,
    }
  },
  created() {
    this.unListen = eventBus.on('user-msg', this.showMsg)
  },
  unmounted() {
    this.unListen()
  },
  methods: {
    showMsg(msg) {
      console.log(msg)
      this.msg = msg
      setTimeout(() => (this.msg = null), msg.timeout || 1500)
    },
  },
}
</script>

<style lang="scss">
.user-msg {
  width: 300px;

  position: absolute;
  right: 5px;
  top: 4px;
  z-index: 1;

  padding: 6px;
  background-color: rgb(108, 130, 138);
  border-radius: 5px;
  color: white;
}

.v-enter-active,
.v-leave-active {
  transition: 0.8s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  translate: 150%;
}
</style>
