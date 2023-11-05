import { newSpecPage } from '@stencil/core/testing';
import { PuFab } from '../pu-fab';

describe('pu-fab', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuFab],
      html: `<pu-fab></pu-fab>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-fab>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-fab>
    `);
  });
});
