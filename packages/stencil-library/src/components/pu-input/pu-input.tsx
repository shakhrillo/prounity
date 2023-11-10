import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'pu-input',
  styleUrl: 'pu-input.css',
  shadow: true,
})
export class PuInput {
<<<<<<< HEAD
  @Prop() label?: string;
  @Prop() placeholder?: string;
  @Prop() disabled?: boolean;
  @Prop() type?: string;
  @Prop() readonly?: boolean;
  @Prop({ mutable: true }) value: string;

  @Event() changed: EventEmitter<string>;

  private handleChange(ev) {
    this.value = ev.target ? ev.target.value : null;
    this.changed.emit(this.value);
=======
    @Prop() label: string;
    @Prop() placeholder: string;
    @Prop() disabled : boolean;
    @Prop() type : string;
    @Prop() readonly : boolean;
    @Prop({ mutable: true }) value: string;

    @Event() changed: EventEmitter<string>;

    private handleChange(ev) {
      this.value = ev.target ? ev.target.value : null;
      this.changed.emit(this.value);
>>>>>>> 98773f7 (...)
  }

  render() {
    return (
      <Host>
        <div class={`pu-input ${this.label} ${this.placeholder} ${this.value} ${this.disabled} ${this.type} ${this.readonly}`}>
          <label htmlFor="">{this.label + ' : '}</label>
          <input
            class={'input'}
            placeholder={this.placeholder}
            value={this.value}
            onInput={ev => this.handleChange(ev)}
            disabled={this.disabled}
            readonly={this.readonly}
            type={this.type}
          />
        </div>
      </Host>
    );
  }
}
