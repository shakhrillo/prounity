import { newE2EPage } from '@stencil/core/testing';

describe('pu-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-text></pu-text>');

    const element = await page.find('pu-text');
    expect(element).toHaveClass('hydrated');
  });
});
