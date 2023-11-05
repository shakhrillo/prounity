import { newSpecPage } from '@stencil/core/testing';
import { PuDatetime } from '../pu-datetime';

describe('pu-datetime', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuDatetime],
      html: `<pu-datetime></pu-datetime>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-datetime>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-datetime>
    `);
  });
});
