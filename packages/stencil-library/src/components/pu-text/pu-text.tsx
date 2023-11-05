import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-text',
  styleUrl: 'pu-text.css',
  shadow: true,
})
export class PuText {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
