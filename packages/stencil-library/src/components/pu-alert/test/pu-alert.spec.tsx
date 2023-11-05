import { newSpecPage } from '@stencil/core/testing';
import { PuAlert } from '../pu-alert';

describe('pu-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuAlert],
      html: `<pu-alert></pu-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-alert>
    `);
  });
});
