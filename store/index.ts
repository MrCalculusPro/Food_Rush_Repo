// This file exists to provide a single entry point for TypeScript to resolve types from.
// The React Native bundler will automatically pick the correct platform-specific file at runtime.
export { store, persistor } from './store.native';
export type { RootState, AppDispatch } from './store.native'; 