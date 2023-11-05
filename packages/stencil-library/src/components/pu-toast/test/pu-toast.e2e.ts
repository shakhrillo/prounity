import { newE2EPage } from '@stencil/core/testing';

describe('pu-toast', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-toast></pu-toast>');

    const element = await page.find('pu-toast');
    expect(element).toHaveClass('hydrated');
  });
});
