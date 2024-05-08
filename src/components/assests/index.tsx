import React from "react";
import { IconType } from "react-icons";
import { FaTelegramPlane } from "react-icons/fa";
import {
  FaAddressBook,
  FaArrowRightToBracket,
  FaArrowUpRightFromSquare,
  FaBurger,
  FaCaretDown,
  FaDiscord,
  FaEnvelopeOpen,
  FaFigma,
  FaFireFlameCurved,
  FaGithub,
  FaHandHoldingDroplet,
  FaHandSparkles,
  FaInstagram,
  FaLaptopFile,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaRegChessKnight,
  FaRegCopy,
  FaRegFileLines,
  FaTelegram,
  FaUser,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import {
  HiBars3,
  HiChevronDown,
  HiChevronUp,
  HiOutlineCheckBadge,
  HiOutlinePlusCircle,
} from "react-icons/hi2";

interface DynamicIconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
}

const iconComponents: Record<string, IconType> = {
  FaAddressBook,
  FaArrowRightToBracket,
  FaArrowUpRightFromSquare,
  FaBurger,
  FaCaretDown,
  FaDiscord,
  FaRegCopy,
  FaRegChessKnight,
  FaEnvelopeOpen,
  FaFigma,
  FaFireFlameCurved,
  FaGithub,
  FaHandHoldingDroplet,
  FaHandSparkles,
  FaInstagram,
  FaLaptopFile,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaRegFileLines,
  FaUser,
  FaTelegram,
  FaXTwitter,
  FaYoutube,
  FaTelegramPlane,
  HiOutlinePlusCircle,
  HiOutlineCheckBadge,
  HiBars3,
  HiChevronDown,
  HiChevronUp,
};

const Icon: React.FC<DynamicIconProps> = ({ name, ...rest }) => {
  // Get the corresponding icon component based on the name
  const IconComponent = iconComponents[name];

  if (!IconComponent) {
    console.error(`Icon '${name}' not found`);
    return null;
  }

  return <IconComponent {...rest} />;
};

// interface CustomIconProps {
//   name: IconName;
//   size?: number | string;
//   fill?: string;
//   className?: string;
// }

// export const CustomIcon: React.FC<CustomIconProps> = ({
//   name,
//   size,
//   fill,
//   className,
// }) => {
//   const Name = React.createElement(icons[name], {
//     width: size,
//     height: size,
//     fill,
//     className,
//   });
//   return Name;
// };

export default Icon;
