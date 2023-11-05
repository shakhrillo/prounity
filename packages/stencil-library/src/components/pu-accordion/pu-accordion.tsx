import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pu-accordion',
  styleUrl: 'pu-accordion.css',
  shadow: true,
})
export class PuAccordion {

  // Lifecycle events
  componentWillLoad() {
    console.log('Component is about to be rendered');
  }

  componentDidLoad() {
    console.log('Component has been rendered');
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
