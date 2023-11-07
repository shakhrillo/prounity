import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'pu-searchbar',
  styleUrl: 'pu-searchbar.css',
  shadow: true,
})
export class PuSearchbar {
  @Prop() placeholder: string;
  @Prop() value: string;
  @Prop() disabled : boolean;
  @State() showButton = false;

  handleInputChange(event) {
    const inputLength = event.target.value.length;
    this.showButton = inputLength > 0;
    this.value = event.target.value;
  }

  componentDidLoad() {
    this.showButton = this.value.length > 0;
  }

  handleButtonClick() {
    this.value = '';
    this.showButton = false;
  }

  render() {
    return (
      <Host>
        <div class={`pu-searchbar ${this.placeholder}`}>
          <div class={'search-icon'}>
            <img src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png" alt="Search" />
          </div>
          <input
            placeholder={this.placeholder}
            type="text"
            disabled={this.disabled}
            value={this.value}
            onInput={(event) => this.handleInputChange(event)}
          />
          {this.showButton && this.value.length > 0 && (
            <button onClick={() => this.handleButtonClick()}>
              <img src="https://cdn0.iconfinder.com/data/icons/octicons/1024/x-512.png" alt="" />
            </button>
          )}
        </div>
        <slot></slot>
      </Host>
    );
  }
}