import { Component, Host, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'pu-loading',
  styleUrl: 'pu-loading.css',
  shadow: true,
})
export class PuLoading {
  @Prop() duration: number = 2000;
  @Prop() message: string = '';
  @State() isLoading = false;

  handleClick() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, this.duration);
  }

  @Watch('duration')
  validateTimeoutSeconds(newValue: number) {
    if (newValue < 0) {
      console.warn('Timeout value must be a positive number');
      this.duration = 2000;
    }
  }

  render() {
    return (
      <Host>
        <div>
          {this.isLoading ? (
            <div class="loading-overlay">
              <div class="loading-card">
                <div class="loading-spinner"></div>
                {this.message && <div class="message">{this.message}</div>}
              </div>
            </div>
          ) : (
            <button onClick={() => this.handleClick()}>Load</button>
          )}
        </div>
        <slot></slot>
      </Host>
    );
  }
}
