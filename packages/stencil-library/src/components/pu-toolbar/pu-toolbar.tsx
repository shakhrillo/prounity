import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
@Component({
  tag: 'pu-toolbar',
  styleUrl: 'pu-toolbar.css',
  shadow: true
})
export class PuToolbar implements ComponentInterface {
  @Prop() title : string;

  render() {
    return (
      <Host>
        <div class={`pu-toolbar ${this.title}`}>
          <div class={`pu-header`}>
            <h4><slot name="title"></slot></h4>
          </div>
        </div>
        
      </Host>
    );
  }
}
