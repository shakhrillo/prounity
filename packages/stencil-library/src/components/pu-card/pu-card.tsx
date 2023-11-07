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
  @Prop() src: string; 

  render() {
    return (
      <Host class={`pu-card ${this.title} ${this.subtitle} ${this.content} ${this.src}`}>
        <img class={`${this.src?"img-card":"d-none"}`} src={`${this.src}`} alt="" />
        <div class={"card-body"}>
          <p class={"card-title"}>{this.title}</p>
          <p class={"card-subtitle"}>{this.subtitle}</p>
          <p class={"card-content"}>{this.content}</p>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
