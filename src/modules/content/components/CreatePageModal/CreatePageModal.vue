<template>
  <DModal @close="close">
    <template #header>
      Create new page
    </template>

    <div>
      <div class="CreatePageModal__form">
        <DInput
          :model.sync="formData.name"
          type="text"
          placeholder="name"
          name="name"
        />

        <DInput
          :model.sync="formData.slug"
          type="email"
          placeholder="slug"
          name="slug"
        />

        <DButton theme="primary" :loading="isLoading" @click="createPage">
          Create
        </DButton>
      </div>
    </div>
  </DModal>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator"
import {addDoc, collection, getFirestore} from "firebase/firestore";
import {AnyObject} from "@/toolkit/src/core/general";

@Component<CreatePageModal>({ name: 'CreatePageModal' })
export class CreatePageModal extends Vue {
  @Prop({ type: Object, required: false, default: () => ({}) })
  protected readonly payload!: AnyObject

  public isLoading = false
  public formData = {
    name: '',
    slug: ''
  }

  public close (): void {
    this.$emit('close')
  }

  public async createPage (): Promise<void> {
    try {
      this.isLoading = true
      const db = getFirestore()

      const response = await addDoc(collection(db, `pages`), {
        meta: {
          ...this.formData
        },
        elements: [],
        containers: []
      })

      this.payload.onSuccess(response.id)
    } catch (e) {
      console.log(e)
    } finally {
      this.isLoading = false
    }
  }
}
export default CreatePageModal
</script>
