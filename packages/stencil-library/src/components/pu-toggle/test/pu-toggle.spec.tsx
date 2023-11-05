import { newSpecPage } from '@stencil/core/testing';
import { PuToggle } from '../pu-toggle';

describe('pu-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuToggle],
      html: `<pu-toggle></pu-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-toggle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-toggle>
    `);
  });
});
