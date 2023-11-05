import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-chip',
  styleUrl: 'pu-chip.css',
  shadow: true,
})
export class PuChip {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
