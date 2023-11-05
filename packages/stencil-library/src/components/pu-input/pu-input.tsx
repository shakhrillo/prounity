import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-input',
  styleUrl: 'pu-input.css',
  shadow: true,
})
export class PuInput {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
