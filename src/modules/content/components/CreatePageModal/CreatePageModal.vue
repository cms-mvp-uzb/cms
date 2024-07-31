<template>
  <DModal @close="close" size="medium">
    <template #header>
      Новая страница
    </template>

    <div>
      <form class="CreatePageModal__form" @submit.prevent="createPage">
        <DInput
          label="Титул"
          footer="Название вашей новой страницы"
          :model.sync="formData.title"
          type="text"
          name="title"
          required
        />

        <DSelect
          label="Выберите родителя"
          :options="options"
          :model.sync="formData.parent"
          placeholder="Выбрать"
          required
        />

        <DSelect
          label="Тип"
          :model.sync="formData.type"
          :options="pageTypeOptions"
          placeholder="Выбрать"
          required
        />

        <div class="CreatePageModal__form__footer">
          <span class="CreatePageModal__form__footer__text">
            URL: {{ base }}{{formData.slug }}
          </span>

          <div class="CreatePageModal__form__footer__actions">
            <DButton
              theme="danger"
              variant="text"
              @click="close"
            >
              Отменить
            </DButton>

            <DButton
              theme="primary"
              :loading="isLoading"
              type="submit"
            >
              Создать
            </DButton>
          </div>
        </div>
      </form>
    </div>
  </DModal>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

import { SelectOptions } from '@/dsl/components/Select'
import { AnyObject } from '@/toolkit/src/core/general'

import { PageData, PageType } from '../../contracts'

@Component<CreatePageModal>({ name: 'CreatePageModal' })
export class CreatePageModal extends Vue {
  @Prop({ type: Object, required: false, default: () => ({}) })
  protected readonly payload!: AnyObject

  public isLoading = false
  public formData: PageData = {
    title: '',
    slug: '',
    type: null,
    parent: null
  }

  public get base (): string {
    return process.env.VUE_APP_BASE_URL
  }

  public get options (): SelectOptions {
    return [
      {
        label: 'Homepage',
        value: 'homepage'
      }
    ]
  }

  public get pageTypeOptions (): SelectOptions {
    return Object.values(PageType).map(value => {
      return {
        label: value,
        value
      }
    })
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

  @Watch('formData.title')
  protected onFormData (value: string): void {
    this.formData.slug = value.toLowerCase().replace(/ /g,"-")
  }
}

export default CreatePageModal
</script>
