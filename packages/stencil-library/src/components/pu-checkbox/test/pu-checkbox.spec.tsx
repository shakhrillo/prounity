import { newSpecPage } from '@stencil/core/testing';
import { PuCheckbox } from '../pu-checkbox';

describe('pu-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuCheckbox],
      html: `<pu-checkbox></pu-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-checkbox>
    `);
  });
});
