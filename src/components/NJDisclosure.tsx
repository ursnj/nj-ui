import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from './Icons';

interface Props {
  title: string;
  text: string;
}

export const NJDisclosure = (props: Props) => {
  const { title, text } = props;

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="njn-disclosure flex w-full justify-between px-3 py-2 text-left text-sm border-bottom">
            <span className="njn-disclosure-title text">{title}</span>
            <ChevronUpIcon className={`njn-disclosure-icon ${open ? 'rotate-0 transform' : 'rotate-180'} h-5 w-5 text-muted`} />
          </Disclosure.Button>
          <Disclosure.Panel className="njn-disclosure-content px-3 py-2 text-sm text-muted">{text}</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
