<template>
  <div>
    <textarea v-model="_formData.content"></textarea>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import { AbstractBlockForm } from "@/constructor/src/builder/_abstract";

import { HtmlBoxElement } from "./HtmlBox.contracts"

@Component({ name: 'HtmlBoxForm' })
export class HtmlBoxForm extends AbstractBlockForm<HtmlBoxElement> {

  protected createInitialContent(): HtmlBoxElement['content'] {
    return {
      content: ''
    }
  }
}
export default HtmlBoxForm
</script>
