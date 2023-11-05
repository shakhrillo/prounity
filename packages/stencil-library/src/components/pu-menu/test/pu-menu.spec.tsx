import { newSpecPage } from '@stencil/core/testing';
import { PuMenu } from '../pu-menu';

describe('pu-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuMenu],
      html: `<pu-menu></pu-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-menu>
    `);
  });
});
