import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-menu',
  styleUrl: 'pu-menu.css',
  shadow: true,
})
export class PuMenu {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
