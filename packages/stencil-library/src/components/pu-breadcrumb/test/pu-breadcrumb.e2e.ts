import { newE2EPage } from '@stencil/core/testing';

describe('pu-breadcrumb', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-breadcrumb></pu-breadcrumb>');

    const element = await page.find('pu-breadcrumb');
    expect(element).toHaveClass('hydrated');
  });
});
