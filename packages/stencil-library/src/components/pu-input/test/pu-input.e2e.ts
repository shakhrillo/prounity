import { newE2EPage } from '@stencil/core/testing';

describe('pu-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-input></pu-input>');

    const element = await page.find('pu-input');
    expect(element).toHaveClass('hydrated');
  });
});
