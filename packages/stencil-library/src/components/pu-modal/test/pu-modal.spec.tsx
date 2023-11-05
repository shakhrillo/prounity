import { newSpecPage } from '@stencil/core/testing';
import { PuModal } from '../pu-modal';

describe('pu-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuModal],
      html: `<pu-modal></pu-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-modal>
    `);
  });
});
