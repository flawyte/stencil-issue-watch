import { h, Component, Element, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'app-product',
  styleUrl: 'app-product.css',
  shadow: false
})
export class AppProduct {
  @Element() host;

  @Prop() name;
  @Prop() quantityLeft;

  button;

  componentDidLoad() {
    this.button = this.host.querySelector('.Button');
  }

  @Watch('quantityLeft')
  watchQuantityLeft(quantityLeft) {
    this.button.disabled = (quantityLeft == 0);
  }

  render() {
    return (
      <div class='Root'>
        <div class='Name'>{this.name}</div>

        <button class='Button'><img class='Icon' src='/assets/ic_cart.svg' /></button>
        <div class='QuantityLeft'>{this.quantityLeft} left</div>
      </div>
    );
  }
}
