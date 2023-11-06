import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'pu-avatar',
  styleUrl: 'pu-avatar.css',
  shadow: true,
})
export class PuAvatar {
  @Prop() src: string;
  @Prop() alt: string;
  @Prop() size: string;
  @Prop() shape: string;

  render() {
    return (
      <Host class={`pu-avatar ${this.size} ${this.shape}`}>
        <img src={`${this.src?this.src:"https://www.pngmart.com/files/21/Account-User-PNG.png"}`} alt={this.alt} />
        <slot></slot>
      </Host>
    );
  }
}