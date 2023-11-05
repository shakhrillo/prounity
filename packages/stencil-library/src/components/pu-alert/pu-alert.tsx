import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-alert',
  styleUrl: 'pu-alert.css',
  shadow: true,
})
export class PuAlert {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
