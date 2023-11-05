import { newSpecPage } from '@stencil/core/testing';
import { PuRadio } from '../pu-radio';

describe('pu-radio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuRadio],
      html: `<pu-radio></pu-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-radio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-radio>
    `);
  });
});
