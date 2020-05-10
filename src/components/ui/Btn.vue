<template>
  <button
    :class="classButton"
    :style="styleButton"
    @click="click"
  >
    <span :class="classText">{{ text }}</span>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import '~/assets/icons/styles.css';

@Component
export default class Btn extends Vue {
  @Prop(String) icon!: string

  @Prop(String) text!: string

  @Prop({ type: Number, default: 2 }) size!: number

  get classButton(): Array<string> {
    const classes = [];
    if (this.icon) {
      classes.push(`sb-${this.icon}`);
    }
    return classes;
  }

  get classText(): Array<string> {
    const classes = [];
    if (this.icon) {
      classes.push('screen-reader-text');
    }
    return classes;
  }

  get styleButton(): object {
    return {
      'font-size': `${this.size}rem`,
    };
  }

  click(event: MouseEvent): void {
    this.$emit('click', event);
  }
}
</script>

<style lang="scss">
button {
  cursor: pointer;
  border: none;
  background: transparent;
}
</style>
