import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-searchbar',
  styleUrl: 'pu-searchbar.css',
  shadow: true,
})
export class PuSearchbar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
