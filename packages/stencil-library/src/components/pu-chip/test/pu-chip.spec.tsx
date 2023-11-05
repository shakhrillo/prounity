import { newSpecPage } from '@stencil/core/testing';
import { PuChip } from '../pu-chip';

describe('pu-chip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuChip],
      html: `<pu-chip></pu-chip>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-chip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-chip>
    `);
  });
});
