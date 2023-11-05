import { newE2EPage } from '@stencil/core/testing';

describe('pu-loading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-loading></pu-loading>');

    const element = await page.find('pu-loading');
    expect(element).toHaveClass('hydrated');
  });
});
