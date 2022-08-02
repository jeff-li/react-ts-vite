import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);
// need this file to use utility functions such as .toBeInTheDocument()
// https://markus.oberlehner.net/blog/using-testing-library-jest-dom-with-vitest/

