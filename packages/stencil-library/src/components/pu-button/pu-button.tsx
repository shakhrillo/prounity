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

  render() {
    return (
      <Host>
        <button class={`button-${this.color} button-${this.size}`} disabled={this.disabled}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
