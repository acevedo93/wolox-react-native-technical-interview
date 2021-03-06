import React from 'react';
import {render} from '@testing-library/react-native';
import {SearchBar} from '../../src/components/SearchBar';

let component: any;
describe('<SearchBar />', () => {
  beforeEach(() => {
    component = render(<SearchBar />);
  });
  it('SearchBar Render correctly', () => {
    expect(component.getByTestId('searchBar')).toBeDefined();
    expect(component.getByTestId('close-search-bar')).toBeDefined();
  });
});
