<template>
  <time
    :datetime="isoDate"
  >
    <slot v-if="this.$slots.default" />
    <template v-else>
      {{ formatedDate }}
    </template>
  </time>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import format from 'date-fns/format';
import parseJSON from 'date-fns/parseJSON';

@Component
export default class DateTime extends Vue {
  @Prop({
    type: [Number, String, Date],
    validator: (date) => (typeof date === 'number'
      ? date >= -864000000000000 && date <= 864000000000000
      : !Number.isNaN((date instanceof Date ? date : parseJSON(date)).getTime())),
  })
  datetime!: string | Date;

  get normalizedDate(): Date {
    if (this.datetime instanceof Date) {
      return this.datetime;
    }
    if (typeof this.datetime === 'number') {
      return new Date(this.datetime);
    }
    return parseJSON(this.datetime);
  }

  get isoDate(): string {
    return this.normalizedDate.toJSON();
  }

  get formatedDate(): string {
    return `the ${format(this.normalizedDate, 'PPP')}`;
  }
}
</script>
