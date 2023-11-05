import { newSpecPage } from '@stencil/core/testing';
import { PuBreadcrumb } from '../pu-breadcrumb';

describe('pu-breadcrumb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuBreadcrumb],
      html: `<pu-breadcrumb></pu-breadcrumb>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-breadcrumb>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-breadcrumb>
    `);
  });
});
