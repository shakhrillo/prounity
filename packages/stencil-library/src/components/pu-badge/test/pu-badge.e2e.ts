import { newE2EPage } from '@stencil/core/testing';

describe('pu-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-badge></pu-badge>');

    const element = await page.find('pu-badge');
    expect(element).toHaveClass('hydrated');
  });
});
