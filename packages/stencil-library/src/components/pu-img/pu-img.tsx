import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-img',
  styleUrl: 'pu-img.css',
  shadow: true,
})
export class PuImg {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
