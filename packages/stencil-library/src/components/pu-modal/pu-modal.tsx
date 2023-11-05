import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-modal',
  styleUrl: 'pu-modal.css',
  shadow: true,
})
export class PuModal {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
