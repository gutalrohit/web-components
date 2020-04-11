import {LitElement, html, css} from 'lit-element';

class litElementFirstProject extends LitElement {
  static get properties() {
    return {
      name: {type: 'string'}
    };
  }
  static get styles() {
    return css`
    h2 {color: red}
    `
  }
  constructor() {
    super();
    this.name = 'Rohit Gutal';
  }
  render() {
    return html`<h2>This is the first Lit Element created by ${this.name}`;
  }
}

customElements.define('my-lit-element', litElementFirstProject);