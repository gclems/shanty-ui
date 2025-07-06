import { Dialog } from '@base-ui-components/react/dialog';
import type { ComponentProps } from 'react';

const SheetPrimitiveRoot = ({modal = true, ...props}:ComponentProps<typeof Dialog.Root>) => <Dialog.Root {...props} modal={modal} />

export { SheetPrimitiveRoot };