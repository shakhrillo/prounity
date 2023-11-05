import { newSpecPage } from '@stencil/core/testing';
import { PuToolbar } from '../pu-toolbar';

describe('pu-toolbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuToolbar],
      html: `<pu-toolbar></pu-toolbar>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-toolbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-toolbar>
    `);
  });
});
