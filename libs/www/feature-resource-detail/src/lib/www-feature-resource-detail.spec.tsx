import { render } from '@testing-library/react';

import WwwFeatureResourceDetail from './www-feature-resource-detail';

describe('WwwFeatureResourceDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WwwFeatureResourceDetail />);
    expect(baseElement).toBeTruthy();
  });
});
