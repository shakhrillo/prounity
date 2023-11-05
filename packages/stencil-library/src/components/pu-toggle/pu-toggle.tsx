import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-toggle',
  styleUrl: 'pu-toggle.css',
  shadow: true,
})
export class PuToggle {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
