<template>
  <div>
    <span v-html="_uiData.content"></span>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import { AbstractBlockUi } from "@/constructor/src/builder/_abstract";

import { HtmlBoxElement } from "./HtmlBox.contracts"
@Component({ name: 'HtmlBoxUi' })
export class HtmlBoxUi extends AbstractBlockUi<HtmlBoxElement> {}
export default HtmlBoxUi
</script>
