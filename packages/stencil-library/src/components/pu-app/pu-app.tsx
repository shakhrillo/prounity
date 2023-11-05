import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-app',
  styleUrl: 'pu-app.css',
  shadow: true,
})
export class PuApp {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
