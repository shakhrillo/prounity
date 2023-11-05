import { newE2EPage } from '@stencil/core/testing';

describe('pu-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-avatar></pu-avatar>');

    const element = await page.find('pu-avatar');
    expect(element).toHaveClass('hydrated');
  });
});
