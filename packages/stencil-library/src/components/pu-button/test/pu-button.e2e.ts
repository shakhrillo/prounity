import { newE2EPage } from '@stencil/core/testing';

describe('pu-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-button></pu-button>');

    const element = await page.find('pu-button');
    expect(element).toHaveClass('hydrated');
  });
});
