<template>
  <Renderer :blocks.sync="blocks.elements" :containers.sync="blocks.containers"/>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Renderer } from "@/constructor/src/builder";
import {doc, getDoc, getFirestore} from "firebase/firestore";

@Component<Preview>({ name: 'Preview',
  components: { Renderer },
  mounted() {
    this.fetchOne()
  }
})
export class Preview extends Vue {
  public blocks = {
    elements: [],
    containers: []
  }

  public async fetchOne (): Promise<void> {
    try {
      const db = getFirestore()
      const candidateDocumentReference = doc(db, `pages/${this.$route.params.id}`)
      const response = await getDoc(candidateDocumentReference)

      const { elements, containers } = response.data() as any

      this.blocks = {
        elements,
        containers
      }

    } catch (e) {
      console.log(e)
    }
  }
}
export default Preview
</script>
