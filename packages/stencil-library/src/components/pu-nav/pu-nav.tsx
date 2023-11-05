import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-nav',
  styleUrl: 'pu-nav.css',
  shadow: true,
})
export class PuNav {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
