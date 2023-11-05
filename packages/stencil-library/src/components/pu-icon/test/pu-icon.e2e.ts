import { newE2EPage } from '@stencil/core/testing';

describe('pu-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-icon></pu-icon>');

    const element = await page.find('pu-icon');
    expect(element).toHaveClass('hydrated');
  });
});
