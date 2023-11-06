import { Component, h, State, Prop, Host } from '@stencil/core';

@Component({
  tag: 'pu-alert',
  styleUrl: 'pu-alert.css',
  shadow: true,
})
export class PuAlert {
  @State() isOpen = false;
  @Prop() role: string;
  @Prop() header?: string;
  @Prop() message?: string;

  toggleAlert() {
    this.isOpen = !this.isOpen;
  }

  render() {
    return (
      <Host class={{ 'pu-alert': true, 'alert-open': this.isOpen }}>
        {!this.isOpen && (
          <button class={'open-alert-button'} onClick={() => this.toggleAlert()}>
            Open Alert
          </button>
        )}
        {this.isOpen && (
          <div>
            <div role={this.role} aria-modal="true" tabindex="-1" class={{ 'overlay-hidden': true, 'overlay-visible': this.isOpen }}>
              <div class="alert-wrapper">
                <div class="alert-head">{this.header && <h2 class="alert-title">{this.header}</h2>}</div>

                <div class="alert-message">{this.message}</div>

                <div class="alert-buttons">
                  <button class="alert-button" onClick={() => this.toggleAlert()}>
                    OK
                  </button>
                </div>
              </div>
            </div>
            <div class={{ 'overlay': true, 'overlay-visible': this.isOpen }}></div>
          </div>
        )}
      </Host>
    );
  }
}
