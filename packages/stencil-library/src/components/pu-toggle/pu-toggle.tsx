import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pu-toggle',
  styleUrl: 'pu-toggle.css',
  shadow: true,
})
export class PuToggle {
  checkbox: HTMLInputElement;
  background: HTMLSpanElement;
  @Prop() checkedColor?: string = '#2196F3';
  @Prop() uncheckedColor?: string = '#ccc';
  @Prop({ mutable: true }) checked?: boolean = false;
  @Prop() labelPlacement?: 'start' | 'end';
  @Prop() disabled?: boolean = false;
  @Prop() justify?: 'start' | 'end' | 'space-between';

  componentDidLoad() {
    this.background.style.setProperty('background', this.checked ? this.checkedColor : this.uncheckedColor);
  }

  toggleSwitch() {
    this.checked = this.checkbox.checked;
    this.background.style.setProperty('background', this.checked ? this.checkedColor : this.uncheckedColor);
  }
  render() {
    return (
      <Host class={`${this.disabled && 'disabled'} justify-${this.justify}`}>
        <div class={`text ${this.labelPlacement === 'start' ? 'start' : 'end'}`}>
          <slot></slot>
        </div>
        <label class="switch" onClick={this.toggleSwitch.bind(this)}>
          <input type="checkbox" ref={(el: HTMLInputElement) => (this.checkbox = el)} checked={this.checked} />
          <span class={'slider'} ref={(el: HTMLSpanElement) => (this.background = el)}></span>
        </label>
      </Host>
    );
  }
}
