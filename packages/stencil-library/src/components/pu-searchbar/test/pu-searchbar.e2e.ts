import { newE2EPage } from '@stencil/core/testing';

describe('pu-searchbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-searchbar></pu-searchbar>');

    const element = await page.find('pu-searchbar');
    expect(element).toHaveClass('hydrated');
  });
});
