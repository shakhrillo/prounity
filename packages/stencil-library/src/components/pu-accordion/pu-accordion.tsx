import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'pu-accordion',
  styleUrl: 'pu-accordion.css',
  shadow: true,
})
export class PuAccordion {
  @State() isOpen: boolean = false;

  private toggleAccordion() {
    this.isOpen = !this.isOpen;
  }
  render() {
    return (
      <Host>
        <div id="header" class="accordion-header" onClick={() => this.toggleAccordion()}>
          <h3>
            <slot name="header"></slot>
          </h3>
          <div id="icon">{this.isOpen ? <span>&#9650;</span> : <span>&#9660;</span>}</div>
        </div>
        <div id="content" class={`accordion-content ${this.isOpen ? 'open' : 'close'}`}>
          <div id="content-wrapper">
            <slot name="content"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
