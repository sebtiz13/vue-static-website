<template>
  <details class="nav-chapter">
    <summary>Summary</summary>
    <nav class="nav-chapter_content">
      <ul class="nav-chapter_list">
        <li
          v-for="heading in headings"
          :key="heading.anchor"
          class="nav-chapter_entry"
          :class="{
            'is-active': activeHeadings[heading.anchor],
          }"
        >
          <a :href="heading.anchor">{{ heading.value }}</a>
        </li>
      </ul>
    </nav>
  </details>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import debounce from 'lodash.debounce';
import { HeadingElement } from '@/types/HeadingElement';

@Component
export default class NavChapter extends Vue {
  @Prop({ type: Array, default: () => ([]) }) headings!: Array<HeadingElement>;

  public activeHeadings: Record<string, boolean> = {};

  private debounceResize = debounce(this.onResize, 200);

  mounted(): void {
    this.onResize();
    window.addEventListener('resize', this.debounceResize);
    window.addEventListener('scroll', this.onScroll);
  }

  beforeDestroy(): void {
    window.removeEventListener('resize', this.debounceResize);
    window.removeEventListener('scroll', this.onScroll);
  }

  onResize(): void {
    if ((window.innerWidth >= 992)) {
      this.$el.setAttribute('open', '');
    } else {
      this.$el.removeAttribute('open');
    }
  }

  onScroll(): void {
    const { activeHeadings } = this;
    this.headings.forEach(({ anchor, element }) => {
      const { top } = element.getBoundingClientRect();
      activeHeadings[anchor] = (top < 100);
    });
    this.activeHeadings = { ...activeHeadings };
  }
}
</script>

<style lang="scss">
$height: 40px;
.nav-chapter {
  height: $height;
  box-shadow: 0 1px 1px rgba($palette-grey-900, 0.4);
  &[open] {
    height: auto;
  }
  summary {
    margin-top: 10px;
    padding: 5px 10px;
    font-weight: bold;
    outline: none;
  }
  &_list {
    list-style: none;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    border-top: 1px solid rgba($palette-grey-900, 0.2);
  }
  &_entry {
    padding: 5px 20px;
    &:not(:last-child) {
      border-bottom: 1px solid rgba($palette-grey-900, 0.4);
    }
  }
  @include lg {
    $height: $height + 5;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 1px 1px rgba($palette-grey-900, 0.4);
    summary {
      display: none;
    }
    &_list {
      margin-left: 0;
      flex-direction: row;
      height: $height;
      line-height: $height;
      border-top: none;
      overflow-y: hidden;
      overflow-x: auto;
      &::-webkit-scrollbar {
        height: 5px;
        background-color: #F5F5F5;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.18);
      }
      &:hover::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.30);
      }
    }
    &_entry#{&}_entry {
      position: relative;
      padding: 0;
      flex-grow: 1;
      text-align: center;
      white-space: nowrap;
      border-bottom: none;
      &.is-active a {
        background-color: $palette-cyan-800;
        &:after {
          background-color: $palette-cyan-800;
        }
      }
      a {
        display: block;
        padding-left: 10px;
        background-color: $palette-cyan-600;
        color: $color-white;
        &:after {
          background-color: $palette-cyan-600;
        }
        &:hover {
          background-color: $palette-cyan-700;
          &:after {
            background-color: $palette-cyan-700;
          }
        }
      }
      &:not(:first-child) a {
        padding-left: ($height / 2) + 5;
      }
      &:not(:last-child) {
        a:after {
          content: '';
          position: absolute;
          top: 0;
          right: -($height / 2);
          width: $height;
          height: $height;
          transform: scale(0.707) rotate(45deg);
          z-index: 1;
          box-shadow: 2px -2px 0 0 rgba(187, 187, 187, 0.3);
          border-radius: 0 5px 0 50px;
        }
      }
    }
  }
}
</style>
