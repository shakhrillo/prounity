import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-toast',
  styleUrl: 'pu-toast.css',
  shadow: true,
})
export class PuToast {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
