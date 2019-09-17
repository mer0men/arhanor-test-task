<template>
  <div class="home">
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" class="crypt-list">
      <crypt-node v-for="(crypt, index) in cryptList" :key="index" :crypt="crypt" data-aos="fade"></crypt-node>
    </div>
  </div>
</template>

<script>
import CryptNode from '@/components/CryptNode'

export default {
  name: 'home',
  components: {
    CryptNode
  },
  data () {
    return {
      busy: false
    }
  },
  methods: {
    async loadMore () {
      this.busy = true
      await this.$store.dispatch('GET_CRYPT', { count: 100, page: Math.floor(this.cryptList.length / 100) })
      this.cryptList.length < 499
        ? this.busy = false
        : this.busy = true
    }
  },
  computed: {
    cryptList () {
      return this.$store.state.cryptList
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: rgb(206, 206, 206);
  background-image: url(../assets/bg.jpg);
  background-size: 100% auto;
  background-attachment: fixed;
  background-position-y: 60%;
  background-repeat: no-repeat;
}

.crypt-list {
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  position: relative;
}
</style>
