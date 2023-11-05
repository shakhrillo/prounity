import { newSpecPage } from '@stencil/core/testing';
import { PuToast } from '../pu-toast';

describe('pu-toast', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuToast],
      html: `<pu-toast></pu-toast>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-toast>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-toast>
    `);
  });
});
