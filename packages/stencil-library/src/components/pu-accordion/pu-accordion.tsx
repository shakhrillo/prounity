import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-accordion',
  styleUrl: 'pu-accordion.css',
  shadow: true,
})
export class PuAccordion {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
