import { newSpecPage } from '@stencil/core/testing';
import { PuInput } from '../pu-input';

describe('pu-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuInput],
      html: `<pu-input></pu-input>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-input>
    `);
  });
});
