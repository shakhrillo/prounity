import { newSpecPage } from '@stencil/core/testing';
import { PuIcon } from '../pu-icon';

describe('pu-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuIcon],
      html: `<pu-icon></pu-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-icon>
    `);
  });
});
