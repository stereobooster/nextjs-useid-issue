# UseId issue

- https://github.com/radix-ui/primitives/issues/811
- https://github.com/adobe/react-spectrum/issues/2231

Good explanation [here](https://github.com/chakra-ui/chakra-ui/issues/4328#issuecomment-920884182)

> Essentially, the problem boils down to the fact that in strict mode, React invokes some hooks twice (https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects). This is because it tries to detect invoking side-effects during the render phase as it leads to problems when using concurrent mode.
