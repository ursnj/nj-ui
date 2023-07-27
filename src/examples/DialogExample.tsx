import { useState } from 'react';
import { NDialog } from '@/components/NDialog';
import { Size } from '@/components/Types';

const DialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="break-inside-avoid mb-16 flex flex-row justify-between">
      <h1 className="nyn-text mb-3 text-lg text-left">Dialog:</h1>
      <NDialog isOpen={isOpen} closeModal={() => setIsOpen(false)} size={Size.MD} title="Payment confirmation">
        <div className="w-full h-full p-3 nyn-text">
          Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
        </div>
      </NDialog>
      <div className="text-sm font-medium text-green-600" onClick={() => setIsOpen(true)}>
        Show Dialog
      </div>
    </div>
  );
};

export default DialogExample;
