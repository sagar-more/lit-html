import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type Option = {
    value: string;
    label: string;
};

@customElement('lit-select')
export class LitSelect extends LitElement {
    static styles = css`
    select {
      padding: 0.5rem;
      font-size: 1rem;
    }
  `;

    interals?: ElementInternals;

    constructor() {
        super();
        this.interals = this.attachInternals?.();
    }

    @property({ reflect: true })
    options: Option[] = [];

    @property({ type: String, reflect: true })
    value: string = '';

    private handleChange(event: Event) {
        const selectElement = event.target as HTMLSelectElement;
        this.value = selectElement.value;
        this.dispatchEvent(new CustomEvent('option-changed', {
            detail: { value: this.value },
            bubbles: true,
            composed: true
        }));
    }

    render() {
        return html`
        <select @change=${this.handleChange}>
            <option value="" disabled selected>Select an option</option>
            ${this.options.map(option => html`<option value="${option.value}">${option.label}</option>`)}
        </select>
        <p>Selected option: ${this.value}</p>
        `;
    }
}