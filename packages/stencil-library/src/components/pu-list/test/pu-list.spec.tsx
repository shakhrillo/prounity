import { newSpecPage } from '@stencil/core/testing';
import { PuList } from '../pu-list';

describe('pu-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuList],
      html: `<pu-list></pu-list>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-list>
    `);
  });
});
