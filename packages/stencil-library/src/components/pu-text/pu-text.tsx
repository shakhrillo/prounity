import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pu-text',
  styleUrl: 'pu-text.css',
  shadow: true,
})
export class PuText {
  @Prop() color?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'light' | 'medium' | 'dark';
  render() {
    return (
      <Host class={`pu-text-${this.color}`}>
        <slot></slot>
      </Host>
    );
  }
}
