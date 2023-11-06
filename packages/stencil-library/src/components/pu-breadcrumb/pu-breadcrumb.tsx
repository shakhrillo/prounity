import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'pu-breadcrumb',
  styleUrl: 'pu-breadcrumb.css',
  shadow: true,
})
export class PuBreadcrumb {
  @Prop() name?: string | undefined;
  @Prop() href?: string | undefined;
  @Prop() target?: string | undefined;
  @Prop() active?: boolean | undefined;
  render() {
    return (
      <Host>
        <a class={`breadcrumb ${this.active ? 'active' : ''}`} href={this.href} target={this.target}>
          {this.name} /
        </a>
      </Host>
    );
  }
}
