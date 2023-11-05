import { newE2EPage } from '@stencil/core/testing';

describe('pu-toolbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-toolbar></pu-toolbar>');

    const element = await page.find('pu-toolbar');
    expect(element).toHaveClass('hydrated');
  });
});
