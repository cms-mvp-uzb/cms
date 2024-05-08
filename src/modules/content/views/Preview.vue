<template>
  <Renderer
    :blocks.sync="blocks.elements"
    :containers.sync="blocks.containers"
    :uiRegistry="uiRegistry"
  />
</template>

<script lang="ts">
import { VueConstructor } from "vue"
import { Component, Vue } from "vue-property-decorator"
import { doc, getDoc, getFirestore } from "firebase/firestore"

import { Renderer } from "@/constructor/src/builder"
import { blocksUiRegistry, PossibleElements } from "@/constructor/src/builder/defaults"

import { customUis } from "@/blocks"

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

  private readonly customUis = customUis

  public get uiRegistry (): Record<PossibleElements, VueConstructor> {
    return {
      ...blocksUiRegistry,
      ...this.customUis
    }
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
