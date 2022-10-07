// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import matchers from '@testing-library/jest-dom/matchers';
// import { expect } from 'vitest';

// expect.extend(matchers);

//Setup jest-dom matchers as globals
import '@testing-library/jest-dom';
import { vi } from 'vitest';
// import '@testing-library/jest-dom/extend-expect';

//Setup react act environment to true
//@ts-ignore
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
vi.mock('next/router', () => require('next-router-mock'));
vi.mock('next/dist/client/router', () => require('next-router-mock'));

/// <reference types="next/types/global" />
