import { newE2EPage } from '@stencil/core/testing';

describe('pu-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-app></pu-app>');

    const element = await page.find('pu-app');
    expect(element).toHaveClass('hydrated');
  });
});
