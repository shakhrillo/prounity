import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-loading',
  styleUrl: 'pu-loading.css',
  shadow: true,
})
export class PuLoading {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
