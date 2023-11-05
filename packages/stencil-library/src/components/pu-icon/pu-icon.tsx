import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-icon',
  styleUrl: 'pu-icon.css',
  shadow: true,
})
export class PuIcon {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
