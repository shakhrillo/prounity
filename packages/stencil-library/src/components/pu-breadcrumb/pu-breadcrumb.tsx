import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-breadcrumb',
  styleUrl: 'pu-breadcrumb.css',
  shadow: true,
})
export class PuBreadcrumb {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
