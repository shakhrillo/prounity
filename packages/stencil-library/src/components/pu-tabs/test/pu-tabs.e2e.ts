import { newE2EPage } from '@stencil/core/testing';

describe('pu-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-tabs></pu-tabs>');

    const element = await page.find('pu-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
