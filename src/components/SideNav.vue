<template>
  <nav class="layout-side_nav">
    <ul class="navMenu">
      <g-link
        v-for="(menuLink, key) in menuLinks"
        :key="key"
        v-slot="{ href, navigate, isActive, isExactActive }"
        :to="menuLink.link"
      >
        <li
          class="navMenu_entry"
          :class="classLink(href, isActive, isExactActive)"
        >
          <a
            :href="href"
            class="navMenu_link"
            @click="navigate"
          >
            {{ menuLink.name }}
          </a>
        </li>
      </g-link>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface MenuLink {
  link: string;
  name: string;
}
@Component
export default class SideNav extends Vue {
  public menuLinks: MenuLink[] = [
    {
      link: '/',
      name: 'Home',
    },
    {
      link: '/about/',
      name: 'About',
    },
  ]

  classLink(link: string, active: boolean, exact: boolean): string {
    if (link === '/' && exact) {
      return 'is-active';
    } if (link !== '/' && active) {
      return 'is-active';
    }
    return '';
  }
}
</script>

<style lang="scss">
.navMenu {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  text-align: center;
  &_entry {
    position: relative;
    border-bottom: 1px solid rgba($palette-blue-grey-100, 0.2);
    &:hover a {
      color: $palette-blue-grey-100;
    }
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      border-bottom: 1px solid rgba($palette-blue-100, 0.6);
      transform: scaleX(0);
      transition: transform ease 0.4s;
    }
    &.is-active:after,
    &:hover:after {
      transform: scaleX(1);
    }
  }
  &_link {
      display: block;
      padding: 5px;
      color: $palette-blue-grey-50;
  }
}
</style>
