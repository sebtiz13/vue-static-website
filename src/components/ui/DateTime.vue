<template>
  <time
    :datetime="isoDate"
  >
    {{ formatedDate }}
  </time>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import format from 'date-fns/format';
import parseJSON from 'date-fns/parseJSON';

@Component
export default class DateTime extends Vue {
  @Prop({
    type: [String, Date],
    validator: (date) => !Number.isNaN((date instanceof Date ? date : parseJSON(date)).getTime()),
  })
  datetime!: string | Date;

  get normalizedDate(): Date {
    if (this.datetime instanceof Date) {
      return this.datetime;
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
