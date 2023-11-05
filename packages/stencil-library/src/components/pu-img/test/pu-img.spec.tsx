import { newSpecPage } from '@stencil/core/testing';
import { PuImg } from '../pu-img';

describe('pu-img', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuImg],
      html: `<pu-img></pu-img>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-img>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-img>
    `);
  });
});
