import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pu-badge',
  styleUrl: 'pu-badge.css',
  shadow: true,
})
export class PuBadge {
  @Prop() color: string;
  @Prop() shape: string;
  @Prop() size: string;

  render() {
    return (
      <Host class={`pu-badge ${this.color?this.color:'light'} ${this.shape} ${this.size}`}>
        <slot></slot>
      </Host>
    );
  }

}
