import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'pu-menu',
  styleUrl: 'pu-menu.css',
  shadow: true,
})
export class PuMenu {
  @State() isOpen: boolean = false;

  private toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  render() {
    return (
      <Host>
        <div class={`menu-icon ${this.isOpen ? 'open' : ''}`} onClick={() => this.toggleMenu()}>
          <img width={30} src="https://icons.veryicon.com/png/o/miscellaneous/unicons/bars-1.png" alt="" />
        </div>
        <div class={`menu-content ${this.isOpen ? 'open' : ''}`}>
          <slot></slot>
        </div>
        {this.isOpen && <div onClick={() => this.toggleMenu()} class="overlay"></div>}
      </Host>
    );
  }
}
