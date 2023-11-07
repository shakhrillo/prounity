import { Component, Host, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'pu-modal',
  styleUrl: 'pu-modal.css',
  shadow: true,
})
export class PuModal {
  @State() isOpen = true;
  @Prop() modalHeader : string
  @Prop() modalContent : string

  toggleModal() {
    this.isOpen = !this.isOpen;
  }

  render() {
    return (
      <Host>
        <div class={`pu-modal ${this.modalHeader} ${this.modalContent}`}>
          <button class={'open-button'} onClick={()=>this.toggleModal()}>open</button>
          <div class={this.isOpen?'modal-close':'modal-open'}>
            
            <div class={"modal-header"}>
            <p>{this.modalHeader}</p>
            </div>
            <div class={"modal-body"}>
              <p>{this.modalContent}</p>
              <button onClick={()=>this.toggleModal()}>ok</button>
            </div>
          </div>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
