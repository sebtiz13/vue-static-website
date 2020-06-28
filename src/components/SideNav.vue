<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavMenu from '@/components/ui/NavMenu.vue';

@Component({
  extends: NavMenu,
})
export default class SideNav extends Vue {
  get classMenu(): string[] {
    return ['navMenu', 'sideNav'];
  }

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
.sideNav.sideNav {
  background-color: unset;
  flex-direction: column;
  .navMenu_entry {
    min-width: 100%;
    &::after {
      bottom: -1px;
      border-bottom: 1px solid rgba($palette-blue-100, 0.6);
      transition-duration: .4s;
    }
  }
  .navMenu_link {
    height: auto;
    border-bottom: 1px solid rgba($palette-blue-grey-100, 0.2);
  }
}
</style>
