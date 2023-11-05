import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'pu-img',
  styleUrl: 'pu-img.css',
  shadow: true,
})
export class PuImg {

  @Prop() rounded: boolean;

  @Prop() src: string;

  render() {
    return (
      <Host class={{
        'rounded': this.rounded,
      }}
      style={{
        backgroundImage: `url(${this.src})`,
      }}
      >
        <slot></slot>
      </Host>
    );
  }

}
