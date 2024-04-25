<template>
  <div class="Card">
    <h3>{{ title }}</h3>

    <p> {{ text }} </p>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component({
  name: 'Card'
})
export class Card extends Vue {
 @Prop({ type: String, required: true })
  public title!: string

  @Prop({ type: String, required: true })
  public text!: string
}
export default Card
</script>
