import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pu-input',
  styleUrl: 'pu-input.css',
  shadow: true,
})
export class PuInput {
    @Prop() label: string;
    @Prop() placeholder: string;
    @Prop() value: string;
    @Prop() disabled : boolean;
    @Prop() type : string;
    @Prop() readonly : boolean;

  render() {
    return (
      <Host>
        <div class={`pu-input ${this.label} ${this.placeholder} ${this.value} ${this.disabled} ${this.type} ${this.readonly}`}>
          {/* <input class={"label"} value={this.label+" : "} disabled type="text" /> */}
          <label htmlFor="">{this.label+" : "}</label>
          <input class={"input"} 
          placeholder={this.placeholder} 
          value={this.value} 
          disabled={this.disabled}
          readonly={this.readonly}
          type={this.type} />
        </div>
        <slot></slot>
      </Host>
    );
  }

}
