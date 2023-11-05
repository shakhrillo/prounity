import { newSpecPage } from '@stencil/core/testing';
import { PuCard } from '../pu-card';

describe('pu-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuCard],
      html: `<pu-card></pu-card>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-card>
    `);
  });
});
