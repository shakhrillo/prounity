import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-tabs',
  styleUrl: 'pu-tabs.css',
  shadow: true,
})
export class PuTabs {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
