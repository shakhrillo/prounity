import { newE2EPage } from '@stencil/core/testing';

describe('pu-nav', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-nav></pu-nav>');

    const element = await page.find('pu-nav');
    expect(element).toHaveClass('hydrated');
  });
});
