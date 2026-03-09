import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-header')
export class LitHeader extends LitElement {
  static styles = css`
    header {
      display: flex;
      justify-content: center;
      background-color: #333;
      color: white;
      padding: 1rem;
      text-align: center;
    }
  `;

  @property({ type: String, reflect: true })
  title: string = 'My Lit Header';

  render() {
    return html`
        <header>
            <h1>${this.title}</h1>
        </header>
        `;
  }
}
