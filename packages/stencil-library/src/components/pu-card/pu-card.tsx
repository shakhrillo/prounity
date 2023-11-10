import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'pu-card',
  styleUrl: 'pu-card.css',
  shadow: true,
})
export class PuCard {

  @Prop() title: string; 
  @Prop() subtitle: string; 
  @Prop() content: string; 

  render() {
    return (
      <Host class={`pu-card ${this.title} ${this.subtitle} ${this.content}`}>
        <div class={"img-card"}><slot name='img'></slot></div>
        <div class={"card-body"}>
          <p class={"card-title"}>{this.title}</p>
          <p class={"card-subtitle"}>{this.subtitle}</p>
          <div class={"card-price"}>
            <p class={"card-content"}>{this.content}</p>
            <slot name='body'></slot>
          </div>
        </div>
        
      </Host>
    );
  }

}
