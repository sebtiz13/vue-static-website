<template>
  <div class="about-header">
    <p class="about-header_name">
      Sébastien Rodriguez
    </p>
    <date-time
      class="about-header_date"
      :datetime="birth"
    >
      <div v-if="timestamp > 0">
        {{ timestamp }} s
      </div>
      <strong
        ref="year"
        @touchstart="onTouchStart"
        @touchend="onTouchend"
        @mousedown="onMouseDown"
      >{{ yearsOld }}</strong>
    </date-time>
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop, Watch,
} from 'vue-property-decorator';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import parseJSON from 'date-fns/parseJSON';

@Component
export default class AboutHeader extends Vue {
  @Prop(String) private readonly birth!: string;

  private mousePosition = 0;

  private dateLeft = 0;

  private timestamp = 0;

  private timestampInterval!: NodeJS.Timeout;

  private touchTimeout!: NodeJS.Timeout;

  get birthDate(): Date {
    return parseJSON(this.birth);
  }

  get yearsOld(): string {
    return formatDistanceToNowStrict(this.birthDate, { roundingMethod: 'floor' });
  }

  @Watch('dateLeft')
  onDateLeftChange(value: number): void {
    if (value >= 150) {
      this.timestampInterval = setInterval(() => {
        this.timestamp = Math.floor(((new Date()).getTime() - this.birthDate.getTime()) / 1000);
      }, 1000);
    } else {
      clearInterval(this.timestampInterval);
    }
  }

  beforeDestroyed(): void {
    // Clear interval when component is destroyed
    clearInterval(this.timestampInterval);
  }

  onMouseDown($event: MouseEvent): void {
    if (this.dateLeft < 150) {
      $event.preventDefault();

      const container = this.$refs.year as HTMLElement;
      // Disable navigator drag
      container.draggable = false;

      this.mousePosition = $event.clientX;
      document.onmousemove = this.elementDrag;
      document.onmouseup = this.stopDrag;
    }
  }

  elementDrag($event: MouseEvent): void {
    $event.preventDefault();
    const container = this.$refs.year as HTMLElement;
    container.classList.add('dragged');

    const parent = container.offsetParent as HTMLElement;
    this.mousePosition = $event.clientX;
    this.dateLeft = this.mousePosition - parent.offsetLeft;
    if (this.dateLeft > 150) {
      this.stopDrag();
    }
    container.style.transform = `translateX(${this.dateLeft}px)`;
  }

  stopDrag(): void {
    const container = this.$refs.year as HTMLElement;
    container.classList.remove('dragged');
    document.onmouseup = null;
    document.onmousemove = null;
  }

  onTouchStart($event: Event): void {
    if (this.dateLeft < 150) {
      $event.preventDefault();
      this.touchTimeout = setTimeout(() => {
        this.dateLeft = 150;
      }, 5000);
    }
  }

  onTouchend(): void {
    if (this.touchTimeout) {
      clearTimeout(this.touchTimeout);
    }
  }
}
</script>

<style lang="scss">
.about-header {
  &_name {
    font-size: 3.6rem;
  }
  &_date {
    position: relative;
    height: 20px;
    div {
      display: inline-block;
      width: 120px;
    }
    strong {
      display: inline-block;
      &:not(.dragged) {
        transform: translateX(0) !important;
      }
    }
  }
}
</style>
