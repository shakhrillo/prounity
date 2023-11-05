import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-button',
  styleUrl: 'pu-button.css',
  shadow: true,
})
export class PuButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
