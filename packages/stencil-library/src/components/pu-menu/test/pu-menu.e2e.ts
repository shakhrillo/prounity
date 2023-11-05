import { newE2EPage } from '@stencil/core/testing';

describe('pu-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-menu></pu-menu>');

    const element = await page.find('pu-menu');
    expect(element).toHaveClass('hydrated');
  });
});
