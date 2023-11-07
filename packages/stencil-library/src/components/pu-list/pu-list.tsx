import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pu-list',
  styleUrl: 'pu-list.css',
  shadow: true,
})
export class PuList {
  @Prop() lines?: 'full' | 'inset' | 'none';
  @Prop() inset = false;

  render() {
    return (
      <Host role="list" class={`list-lines-${this.lines}`}>
        <slot></slot>
      </Host>
    );
  }
}
