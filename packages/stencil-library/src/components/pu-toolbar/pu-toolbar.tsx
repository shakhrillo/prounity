import { Component, ComponentInterface, Host, h } from '@stencil/core';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'pu-toolbar',
  styleUrls: {
    ios: 'pu-toolbar.ios.css',
    md: 'pu-toolbar.md.css',
  },
  shadow: true
})
export class PuToolbar implements ComponentInterface {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
