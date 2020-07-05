<template>
  <nav>
    <ul
      :class="classMenu"
    >
      <g-link
        v-for="(menuLink, key) in menuLinks"
        :key="key"
        v-slot="{ href, navigate, isActive, isExactActive }"
        :to="menuLink.path"
      >
        <li
          class="navMenu_entry"
          :class="classLink(href, isActive, isExactActive)"
        >
          <a
            :href="href"
            class="navMenu_link"
            @click="onClickLink($event, navigate)"
          >
            <span>{{ menuLink.title }}</span>
          </a>
        </li>
      </g-link>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

interface MenuLink {
  title: string;
  path: string;
}

@Component
export default class NavMenu extends Vue {
  @Prop(Array) private readonly menuLinks!: MenuLink;

  get classMenu(): string {
    return 'navMenu';
  }

  classLink(link: string, active: boolean, exact: boolean): string[] {
    const classes = [];
    if (active && exact) {
      classes.push('is-active');
    }
    return classes;
  }

  onClickLink($event: MouseEvent, navigate: (e: MouseEvent) => void): void {
    this.$emit('navigate', $event);
    navigate($event);
  }
}
</script>

<style lang="scss">
.navMenu {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  max-width: 100%;
  text-align: center;
  background-color: $palette-cyan-600;
  &_entry {
    flex-grow: 1;
    position: relative;
    @include xl {
      min-width: 250px;
    }
    &:hover a {
      color: $palette-blue-grey-100;
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      border-bottom: 4px solid $palette-cyan-900;
      transform: scaleX(0);
      transition: transform ease 0.3s;
    }
    &.is-active:after,
    &:hover:after {
      transform: scaleX(1);
    }
  }
  &_link {
    display: flex;
    outline: 0;
    height: 40px;
    align-items: center;
    justify-content: center;
    padding: 5px;
    color: $palette-blue-grey-50;
  }
}
</style>
