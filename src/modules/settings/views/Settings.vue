<template>
  <div class="settings">
    <h2 class="settings__heading">Настройки</h2>

    <div class="settings__tabs">
      <DTabs :tabs="tabs">
        <template #default="{ activeTab }">
          <General v-show="activeTab === tab.General"></General>
          <Profile v-show="activeTab === tab.Profile"></Profile>
          <Layouts v-show="activeTab === tab.Layouts"></Layouts>
          <Notifications v-show="activeTab === tab.Notifications"></Notifications>
        </template>
      </DTabs>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

import {Tab, tabs} from './Settings.config';
import {General, Layouts, Notifications, Profile} from './tabs';

/**s
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 * @author Maciej Perzankowski <perzankowski.maciej@gmail.com>
 */
@Component<SettingsView>({
  name: 'SettingsView',
  components: {General, Profile, Layouts, Notifications},
})
export class SettingsView extends Vue {
  public readonly tabs = tabs
  public readonly tab = Tab
}

export default SettingsView
</script>
