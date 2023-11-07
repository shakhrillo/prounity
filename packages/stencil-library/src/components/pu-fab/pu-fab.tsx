import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'pu-fab',
  styleUrl: 'pu-fab.css',
  shadow: true,
})
export class PuFab {
  @Prop() horizontal?: 'start' | 'end' | 'center';
  @Prop() vertical?: 'top' | 'bottom' | 'center';

  render() {
    return (
      <Host class={`fab-horizontal-${this.horizontal}`}>
        <slot>+</slot>
      </Host>
    );
  }
}
