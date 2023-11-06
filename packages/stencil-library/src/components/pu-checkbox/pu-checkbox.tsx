import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pu-checkbox',
  styleUrl: 'pu-checkbox.css',
  shadow: true,
})
export class PuCheckbox {
  @Prop() slot: 'start' | 'end' = 'end';

  render() {
    return (
      <Host class={`checkbox-container `}>
        <label>
          {this.slot === 'start' && <input type="checkbox" class="checkbox-input" />}
          <slot></slot>
          {this.slot === 'end' && <input type="checkbox" class="checkbox-input" />}
        </label>
      </Host>
    );
  }
}
