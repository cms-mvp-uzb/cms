<template>
  <div class="Pages">
    <div class="Pages__actions">
      <DButton type="secondary" @click="openCreatePageModal">
        <template #prepend>
          <DIcon name="plusCircle"/>
        </template>
        Create
      </DButton>
    </div>

    <DTable :headers="tableHeaders" :items="tableItems">
      <template v-slot:cell-name="{ item }">
        <strong>{{ item.name }}</strong>
      </template>

      <template v-slot:cell-id="{ item }">
        <small>{{ item.id }}</small>
      </template>

      <template v-slot:cell-actions="{ item }">
        <DButton theme="danger" size="small">
          Delete
        </DButton>

        <DButton theme="primary" size="small" @click="editPage(item)">
          Edit
        </DButton>
      </template>
    </DTable>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {getFirestore, collection, getDocs, query} from 'firebase/firestore'

import {TableItem} from '@/dsl/components/Table'
import {Modal, RouteName} from "@/modules/content/config"
import {ModalServiceType} from "@/toolkit/src/core/services/modal";

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
@Component<Pages>({
  name: 'Pages',
  mounted(): void {
    this.fetchPages()
  }
})
export class Pages extends Vue {
  protected readonly modalService = this.$container.get(ModalServiceType)

  public tableHeaders: string[] = ['Title', 'Identifier', 'Actions']
  public tableItems: TableItem[] = []

  public openCreatePageModal(): void {
    this.modalService.show(
      Modal.CreatePage,
      {
        onSuccess: (id: string) => {
          this.$router.push({
            name: `content.${RouteName.Editor}`,
            params: {
              id
            }
          })

          this.modalService.close()
        }
      }
    )
  }

  public editPage(payload: any): void {
    console.log(payload)
    this.$router.push({
      name: `content.${RouteName.Editor}`,
      params: {
        id: payload.id
      }
    })
  }

  public async fetchPages(): Promise<void> {
    try {
      const db = getFirestore()
      const _query = query(collection(db, 'pages'))

      const response = await getDocs(_query)

      this.tableItems = response.docs.map((doc) => {
        return {
          name: doc.data().meta.name,
          id: doc.id,
          actions: ''
        }
      })

    } catch (e) {
      console.log(e)
    }
  }
}

export default Pages
</script>
