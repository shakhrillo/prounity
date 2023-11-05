import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-content',
  styleUrl: 'pu-content.css',
  shadow: true,
})
export class PuContent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
