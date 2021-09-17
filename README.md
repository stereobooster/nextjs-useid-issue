# UseId issue

- https://github.com/radix-ui/primitives/issues/811
- https://github.com/adobe/react-spectrum/issues/2231

Good explanation [here](https://github.com/chakra-ui/chakra-ui/issues/4328#issuecomment-920884182)

> Essentially, the problem boils down to the fact that in strict mode, React invokes some hooks twice (https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects). This is because it tries to detect invoking side-effects during the render phase as it leads to problems when using concurrent mode.

## useId implementations

- [reach-ui](https://github.com/reach/reach-ui/blob/develop/packages/auto-id/src/index.tsx)
- [radix-ui](https://github.com/radix-ui/primitives/blob/main/packages/react/id/src/id.tsx)
- [react-spectrum](https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/utils/src/useId.ts)
- [fluentui](https://github.com/microsoft/fluentui/blob/master/packages/react-hooks/src/useId.ts)
- [Yaska/react-use-id-hook](https://github.com/Yaska/react-use-id-hook/blob/master/src/index.tsx)
- [AxisCommunications/react-hooks-shareable](https://github.com/AxisCommunications/react-hooks-shareable/blob/main/src/useId.ts)
