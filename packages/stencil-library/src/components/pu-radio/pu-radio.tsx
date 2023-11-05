import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-radio',
  styleUrl: 'pu-radio.css',
  shadow: true,
})
export class PuRadio {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
