import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-card',
  styleUrl: 'pu-card.css',
  shadow: true,
})
export class PuCard {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
