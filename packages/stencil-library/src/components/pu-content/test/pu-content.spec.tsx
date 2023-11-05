import { newSpecPage } from '@stencil/core/testing';
import { PuContent } from '../pu-content';

describe('pu-content', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuContent],
      html: `<pu-content></pu-content>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-content>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-content>
    `);
  });
});
