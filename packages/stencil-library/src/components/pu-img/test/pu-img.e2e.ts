import { newE2EPage } from '@stencil/core/testing';

describe('pu-img', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-img></pu-img>');

    const element = await page.find('pu-img');
    expect(element).toHaveClass('hydrated');
  });
});
