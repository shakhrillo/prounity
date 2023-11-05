import { newSpecPage } from '@stencil/core/testing';
import { PuTabs } from '../pu-tabs';

describe('pu-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuTabs],
      html: `<pu-tabs></pu-tabs>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-tabs>
    `);
  });
});
