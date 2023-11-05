import { newSpecPage } from '@stencil/core/testing';
import { PuLoading } from '../pu-loading';

describe('pu-loading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuLoading],
      html: `<pu-loading></pu-loading>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-loading>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-loading>
    `);
  });
});
