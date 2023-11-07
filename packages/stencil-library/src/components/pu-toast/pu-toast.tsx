import { Component, Host, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'pu-toast',
  styleUrl: 'pu-toast.css',
  shadow: true,
})
export class PuToast {
  @Prop() text : string;
  @Prop() time : number;
  @State() showToast = false;

  handleClick() {
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, this.time);
  }

  render() {
    return (
      <Host>
        <div class={`pu-toast ${this.text}`}>
        <button onClick={() => this.handleClick()}>open</button>
        {this.showToast && (
          <div class="toast">
            {this.text}
          </div>
        )}
        </div>
          
        
        <slot></slot>
      </Host>
    );
  }
}