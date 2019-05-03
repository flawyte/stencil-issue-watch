import { h, Component } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false
})
export class AppRoot {
  render() {
    return (
      <div>
        <app-product name='Corn flakes' description='' quantity-left='4'></app-product>
        <app-product name='Milk' description='For optimal use, put it after the corn flakes, not before.' quantity-left='2'></app-product>
        <app-product name='Sugar' description='Bla bla bla bla.' quantity-left='0'></app-product>
      </div>
    );
  }
}
