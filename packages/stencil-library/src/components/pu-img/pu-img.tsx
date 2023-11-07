import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'pu-img',
  styleUrl: 'pu-img.css',
  shadow: true,
})
export class PuImg {
  @Prop() rounded: boolean;
  @Prop() src: string;
  @Prop() alt: string;
  @Prop() onLoad: () => void;
  @Prop() loadError: () => void;

  render() {
    const imageClass = this.rounded ? 'rounded' : '';
    const { src, alt, onLoad, loadError } = this;
    return (
      <Host>
        <img src={src} alt={alt} onLoad={onLoad} onError={loadError} part="image" class={imageClass} />
      </Host>
    );
  }
}
