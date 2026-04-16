import { Github, Linkedin, Mail } from "lucide-react";

export type ContactMethod = {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
};

export const contactMethods: ContactMethod[] = [
  {
    id: "email",
    label: "Email",
    value: "mahmudulhasanhasib443@gmail.com",
    href: "mailto:mahmudulhasanhasib443@gmail.com",
    icon: <Mail size={24} />,
  },
  {
    id: "github",
    label: "GitHub",
    value: "@mahmudul-hasan-hasib",
    href: "https://github.com/mahmudul-hasan-hasib",
    icon: <Github size={24} />,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Mahmudul Hasan Hasib",
    href: "https://www.linkedin.com/in/mahmudul-hasan-hasib-40b102261/",
    icon: <Linkedin size={24} />,
  },
];