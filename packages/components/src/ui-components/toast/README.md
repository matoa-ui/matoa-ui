# Toast

> Displays toast notification to show feedback to dynamic data.

## Usage

To use this component in your app, import as instruction follows:

```tsx
import { useToast } from '@matoa-ui/components';

export default function Component() {
  const { addToast } = useToast();

  return <button onClick={() => addToast({ message: 'This is a toast!' })}>Show toast</button>;
}
```

## API

TBA
