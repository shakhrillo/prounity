import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-list',
  styleUrl: 'pu-list.css',
  shadow: true,
})
export class PuList {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
