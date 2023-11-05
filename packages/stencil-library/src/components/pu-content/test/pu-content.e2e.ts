import { newE2EPage } from '@stencil/core/testing';

describe('pu-content', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-content></pu-content>');

    const element = await page.find('pu-content');
    expect(element).toHaveClass('hydrated');
  });
});
