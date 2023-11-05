import { newE2EPage } from '@stencil/core/testing';

describe('pu-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-checkbox></pu-checkbox>');

    const element = await page.find('pu-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
