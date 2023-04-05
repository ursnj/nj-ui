import {Popover, Transition } from '@headlessui/react'
import {Fragment, ReactNode} from 'react';

interface Props {
  trigger: ReactNode;
  children: ReactNode;
}

const CustomPopover = (props: Props) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button>
            {props.trigger}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-0 z-10 mt-2 w-screen max-w-[250px] -translate-x-0 transform">
              {props.children}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default CustomPopover;
