import { newSpecPage } from '@stencil/core/testing';
import { PuNav } from '../pu-nav';

describe('pu-nav', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuNav],
      html: `<pu-nav></pu-nav>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-nav>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-nav>
    `);
  });
});
