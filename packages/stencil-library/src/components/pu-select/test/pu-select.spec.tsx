import { newSpecPage } from '@stencil/core/testing';
import { PuSelect } from '../pu-select';

describe('pu-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuSelect],
      html: `<pu-select></pu-select>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-select>
    `);
  });
});
