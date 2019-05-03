/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import { JSX } from '@stencil/core';


export namespace Components {
  interface AppProduct {
    'description': any;
    'name': any;
    'quantityLeft': any;
  }
  interface AppRoot {}
}

declare namespace LocalJSX {
  interface AppProduct extends JSXBase.HTMLAttributes {
    'description'?: any;
    'name'?: any;
    'quantityLeft'?: any;
  }
  interface AppRoot extends JSXBase.HTMLAttributes {}

  interface ElementInterfaces {
    'AppProduct': Components.AppProduct;
    'AppRoot': Components.AppRoot;
  }

  interface IntrinsicElements {
    'AppProduct': LocalJSX.AppProduct;
    'AppRoot': LocalJSX.AppRoot;
  }
}
export { LocalJSX as JSX };

declare module "@stencil/core" {
  export namespace JSX {
    interface ElementInterfaces extends LocalJSX.ElementInterfaces {}
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}

declare global {


  interface HTMLAppProductElement extends Components.AppProduct, HTMLStencilElement {}
  var HTMLAppProductElement: {
    prototype: HTMLAppProductElement;
    new (): HTMLAppProductElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };
  interface HTMLElementTagNameMap {
    'app-product': HTMLAppProductElement
    'app-root': HTMLAppRootElement
  }

  interface ElementTagNameMap {
    'app-product': HTMLAppProductElement;
    'app-root': HTMLAppRootElement;
  }
}

