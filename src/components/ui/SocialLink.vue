<template>
  <a
    class="social-link"
    :href="serviceUrl"
    target="_blank"
    @click="onclick"
  >
    <i :class="`sb-${service}`" />
  </a>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import enumValidator from '@/helpers/enumValidator';

enum Services {
  FACEBOOK='facebook',
  TWITTER='twitter',
}

@Component
export default class SocialLink extends Vue {
  @Prop(String) url!: string;

  @Prop({ type: Boolean, default: false }) share!: boolean;

  @Prop({
    type: String,
    default: 'facebook',
    validator: (value) => enumValidator(Services, value),
  })
  service!: Services;

  @Prop({ type: String, default: '' }) text!: string;

  get serviceUrl(): string {
    let link = this.service === 'twitter'
      ? 'https://twitter.com/sebtiz13'
      : 'https://www.facebook.com/Sebtiz13';

    if (this.share) {
      link = `https://www.facebook.com/sharer/sharer.php?u=${this.url}&display=page`;

      if (this.service === 'twitter') {
        link = `https://twitter.com/intent/tweet?via=sebtiz13&url=${this.url}`;
        if (this.text.length > 0) {
          link += `&text=${this.text}`;
        }
      }
    }
    return link;
  }

  onclick(event: MouseEvent): boolean {
    const mobile = (navigator.userAgent.match(/Android|iPhone|iPad|iPod/i) || []).pop();
    if (this.share) {
      event.preventDefault();
      let url = this.serviceUrl;
      if (this.service === 'facebook') {
        url = url.replace('display=page', 'display=popup');
      }

      const options = 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=600';
      window.open(url, this.service, options);
      return false;
    }
    if (typeof mobile !== 'undefined' && this.service === 'facebook') {
      event.preventDefault();
      if (mobile === 'Android') {
        window.open('fb://page/154180774704159', 'facebook');
      } else if (['iPhone', 'iPad', 'iPod'].includes(mobile)) {
        window.open('fb://page/?id=154180774704159', 'facebook');
      }
      // Fallback
      window.open(this.serviceUrl, 'facebook');
      return false;
    }
    return true;
  }
}
</script>

<style>
.social-links {
  display: flex;
  justify-content: space-between;
  min-width: 60px;
}
.social-link {
  color: inherit;
  font-size: 2.2rem;
}
</style>
