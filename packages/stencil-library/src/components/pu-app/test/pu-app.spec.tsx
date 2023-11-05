import { newSpecPage } from '@stencil/core/testing';
import { PuApp } from '../pu-app';

describe('pu-app', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuApp],
      html: `<pu-app></pu-app>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-app>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-app>
    `);
  });
});
