import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-select',
  styleUrl: 'pu-select.css',
  shadow: true,
})
export class PuSelect {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
