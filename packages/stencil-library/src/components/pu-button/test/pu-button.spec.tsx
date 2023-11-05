import { newSpecPage } from '@stencil/core/testing';
import { PuButton } from '../pu-button';

describe('pu-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuButton],
      html: `<pu-button></pu-button>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-button>
    `);
  });
});
