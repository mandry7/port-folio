import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";

const ContactLink = () => {
  return (
    <div className="contact">
      <h1 className="title uppercase">CONTACT</h1>
      <div className="flex gap-6 ">
        <a
          href="https://github.com/Mandrindra7?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGithub className="text-yellow-500 text-3xl cursor-pointer hover:text-yellow-100" />
        </a>
        <a
          href="https://www.linkedin.com/in/mandrindra-ranarijaona-793a89147/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <IoLogoLinkedin className="text-yellow-500 text-3xl hover:text-yellow-100 " />
        </a>
        <a
          href="
https://api.whatsapp.com/send?phone=+261340700916&text=Hello!"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <IoLogoWhatsapp className="text-yellow-500 text-3xl hover:text-yellow-100" />
        </a>

        <a
          href="mailto:herymandrindra@gmail.com?"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdContactMail className="text-yellow-500 text-3xl hover:text-yellow-100" />
        </a>
      </div>
    </div>
  );
};

export default ContactLink;
