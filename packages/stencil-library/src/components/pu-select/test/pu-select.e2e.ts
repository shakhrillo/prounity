import { newE2EPage } from '@stencil/core/testing';

describe('pu-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pu-select></pu-select>');

    const element = await page.find('pu-select');
    expect(element).toHaveClass('hydrated');
  });
});
