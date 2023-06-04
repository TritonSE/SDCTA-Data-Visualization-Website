import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
}


/**
 * Collapsible Element that collapses the content inside.
 * Currently Intended to be used for MembershipTiers Page
 * TODO: No Styling has been done
 */
export const Collapsible: React.FC<CollapsibleProps> = ({
  title,
  children,
}: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpening = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleOpening}>
        {title}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && <div> {children} </div>}
    </>
  );
};
