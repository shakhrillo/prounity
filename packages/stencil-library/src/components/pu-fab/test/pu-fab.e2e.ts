import { newE2EPage } from '@stencil/core/testing';

describe('pu-fab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-fab></pu-fab>');

    const element = await page.find('pu-fab');
    expect(element).toHaveClass('hydrated');
  });
});
