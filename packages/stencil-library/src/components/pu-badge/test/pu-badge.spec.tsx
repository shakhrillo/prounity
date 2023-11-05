import { newSpecPage } from '@stencil/core/testing';
import { PuBadge } from '../pu-badge';

describe('pu-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuBadge],
      html: `<pu-badge></pu-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-badge>
    `);
  });
});
