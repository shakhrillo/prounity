import { newSpecPage } from '@stencil/core/testing';
import { PuSearchbar } from '../pu-searchbar';

describe('pu-searchbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuSearchbar],
      html: `<pu-searchbar></pu-searchbar>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-searchbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-searchbar>
    `);
  });
});
