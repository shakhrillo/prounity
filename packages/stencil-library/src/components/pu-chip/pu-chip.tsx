import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'pu-chip',
  styleUrl: 'pu-chip.css',
  shadow: true,
})
export class PuChip {
  @Prop() outline = false;
  @Prop() disabled = false;
  render() {
    return (
      <Host class={`${this.outline && 'outline'} ${this.disabled && 'disable'}`}>
        <slot></slot>
      </Host>
    );
  }
}
