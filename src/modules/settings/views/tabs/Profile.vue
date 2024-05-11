<template>
  <div class="profile">
    profile view
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

/**
 * @author Maciej Perzankowski <perzankowski.maciej@gmail.com>
 */
@Component<ProfileView>({
  name: 'ProfileView',
  components: {},
})
export class ProfileView extends Vue {
}

export default ProfileView
</script>
