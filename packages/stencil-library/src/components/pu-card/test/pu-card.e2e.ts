import { newE2EPage } from '@stencil/core/testing';

describe('pu-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-card></pu-card>');

    const element = await page.find('pu-card');
    expect(element).toHaveClass('hydrated');
  });
});
