import { ReactElement, JSXElementConstructor } from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// Import reducers
import { authSlice } from "src/redux/features/authentication/authSlice";
import { counterSlice } from "../redux/features/counter/counterSlice";
function render(
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        [authSlice.name]: authSlice.reducer,
        [counterSlice.name]: counterSlice.reducer,
      }, // Import reducers here
      middleware: new MiddlewareArray(thunk),
      preloadedState,
    }),
    ...renderOptions
  }: any = {}
) {
  const Wrapper: JSXElementConstructor<{
    children: ReactElement<any, string | JSXElementConstructor<any>>;
  }> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
