import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-datetime',
  styleUrl: 'pu-datetime.css',
  shadow: true,
})
export class PuDatetime {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
