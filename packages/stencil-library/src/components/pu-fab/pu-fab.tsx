import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-fab',
  styleUrl: 'pu-fab.css',
  shadow: true,
})
export class PuFab {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
