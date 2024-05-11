<template>
  <div class="notifications">
    notifications view
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

/**
 * @author Maciej Perzankowski <perzankowski.maciej@gmail.com>
 */
@Component<NotificationsView>({
  name: 'NotificationsView',
  components: {},
})
export class NotificationsView extends Vue {
}

export default NotificationsView
</script>
