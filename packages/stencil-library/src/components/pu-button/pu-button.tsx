import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pu-button',
  styleUrl: 'pu-button.css',
  shadow: true,
})
export class PuButton {
  @Prop() color: 'primary' | 'success' | 'warning' = 'primary';
  @Prop() size: 'sm' | 'md' | 'large' = 'md';
  @Prop() disabled: boolean = false;
  @Prop() align: 'start' | 'center' | 'end' = 'center';

  render() {
    const alignClass = `align-${this.align}`;
    return (
      <Host class={alignClass}>
        <button class={`button-${this.color} button-${this.size} ${alignClass}`} disabled={this.disabled}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
