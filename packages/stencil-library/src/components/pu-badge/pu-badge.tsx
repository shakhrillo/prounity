import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-badge',
  styleUrl: 'pu-badge.css',
  shadow: true,
})
export class PuBadge {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
