import { newE2EPage } from '@stencil/core/testing';

describe('pu-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-list></pu-list>');

    const element = await page.find('pu-list');
    expect(element).toHaveClass('hydrated');
  });
});
