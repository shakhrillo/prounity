import { newSpecPage } from '@stencil/core/testing';
import { PuText } from '../pu-text';

describe('pu-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuText],
      html: `<pu-text></pu-text>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-text>
    `);
  });
});
