import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-avatar',
  styleUrl: 'pu-avatar.css',
  shadow: true,
})
export class PuAvatar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
