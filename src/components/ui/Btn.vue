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
import '@/assets/icons/styles.css';

@Component
export default class Btn extends Vue {
  @Prop(String) icon!: string

  @Prop(String) text!: string

  @Prop({ type: Number, default: 2 }) size!: number

  @Prop({ type: Boolean, default: false }) ripple!: boolean

  private activeClass = '';

  get classButton(): string[] {
    const classes = [this.activeClass];
    if (this.ripple) {
      classes.push('ripple');
    }
    if (this.icon) {
      classes.push(`sb-${this.icon}`);
    }
    return classes;
  }

  get classText(): string[] {
    const classes = [];
    if (this.icon) {
      classes.push('screen-reader-text');
    }
    return classes;
  }

  get styleButton(): Record<string, string> {
    return {
      'font-size': `${this.size}rem`,
    };
  }

  mounted(): void {
    this.$el.addEventListener('transitionend', this.transitionend, { passive: true });
  }

  beforeDestroy(): void {
    this.$el.removeEventListener('transitionend', this.transitionend);
  }

  click(event: MouseEvent): void {
    this.$emit('click', event);

    if (this.ripple) {
      // Reset animation for spam click
      if (this.activeClass === 'ripple-active') {
        this.activeClass = '';
      }
      setTimeout(() => {
        this.activeClass = 'ripple-active';
      });
    }
  }

  transitionend(event: Event): void {
    (event.target as HTMLElement).blur();
    this.activeClass = '';
  }
}
</script>

<style lang="scss">
button {
  cursor: pointer;
  border: none;
  background: transparent;
  // Remove hightlight on chrome android
  -webkit-tap-highlight-color: transparent;
  &:focus {
    outline: 0 !important;
    box-shadow: none !important;
  }
  &.ripple {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle, rgba(0, 0, 0, .1) 1%, transparent 1%) center/100%;
    }
    &.ripple-active::after {
      background-size: 15000%;
      transition: background-size .5s;
    }
  }
}
</style>
