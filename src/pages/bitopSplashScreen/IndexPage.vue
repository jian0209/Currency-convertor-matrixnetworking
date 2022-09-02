<template>
  <q-page style="display: flex; justify-content: center; align-items: center"
    ><q-img src="./img/logo.jpeg" height="40vh" width="40vh"
  /></q-page>
</template>
  
  <script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    document.title = 'Term&Condition-Currency'

    const tab = ref('userAgreement')
    const splitterModel = ref(20)

    return { tab, splitterModel }
  }
})
</script>
  
  <style>
.inside-cont-term-privacy {
  padding: 10vh 10vw;
}

.tabColor {
  color: #e8aa10;
}

.block {
  font-size: 21px;
}

@media screen and (max-width: 910px) {
  .block {
    font-size: 17px;
  }
}
</style>
  