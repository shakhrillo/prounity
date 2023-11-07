import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'pu-icon',
  styleUrl: 'pu-icon.css',
  shadow: true,
})
export class PuIcon {
  @Prop() size: 'sm' | 'md' | 'large' = 'md';
  @Prop() icon: string;

  render() {
    return (
      <Host>
        <span class={`icon icon-${this.size}`}>
          <img src={this.icon} alt="Icon" />
        </span>
      </Host>
    );
  }
}
