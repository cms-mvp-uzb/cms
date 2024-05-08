<template>
  <div class="EditorView">
     <PageBuilder
       v-if="blocks"
       :blockSet="blocks.elements"
       :containerSet="blocks.containers"
       :customBlocks="customBlocks"
       :customForms="customForms"
       :customUserInterfaces="customUis"
       @save="onSave"
       @preview="onPreview"
     />

    <DLoader v-else />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getFirestore, updateDoc, doc, getDoc } from 'firebase/firestore'

import { AnyObject } from "@/toolkit/src/core/general"

import { customBlocks, customForms, customUis } from "@/blocks"

import { PageBuilder } from '@/shared/components/PageBuilder'
import { RouteName } from "@/modules/content/config"

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
@Component<EditorView>({
  name: 'EditorView',
  components: { PageBuilder },
  mounted() {
    this.fetchOne()
  }
})
export class EditorView extends Vue {
  public blocks:  {
    elements: [],
    containers: []
  } | null = null

  public readonly customBlocks = customBlocks
  public readonly customForms = customForms
  public readonly customUis = customUis

  public async onSave ({ elements, containers }: AnyObject): Promise<void> {
    const db = getFirestore();

    try {
      const candidateDocumentReference = doc(db, `pages/${this.$route.params.id}`)
      await updateDoc(candidateDocumentReference, {
        elements,
        containers
      })
    } catch (e) {
      console.log(e)
    }
  }

  public onPreview (): void {
    this.$router.push({
      name: `content.${RouteName.Preview}`,
      params: {
        id: this.$route.params.id
      }
    })
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
export default EditorView
</script>
