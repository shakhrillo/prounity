import { newSpecPage } from '@stencil/core/testing';
import { PuAvatar } from '../pu-avatar';

describe('pu-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PuAvatar],
      html: `<pu-avatar></pu-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <pu-avatar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pu-avatar>
    `);
  });
});
