import { newSpecPage } from '@stencil/core/testing';
import { PuAccordion } from '../pu-accordion';

describe('pu-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuAccordion],
      html: `<pu-accordion></pu-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-accordion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-accordion>
    `);
  });
});
