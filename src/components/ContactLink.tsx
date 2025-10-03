import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";

const ContactLink = () => {
  return (
    <div className="contact">
      <div className="flex gap-6 ">
        <a
          href="https://github.com/Mandrindra7?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGithub className="text-[#F4991A] text-3xl cursor-pointer hover:text-[#F4991A]/70" />
        </a>
        <a
          href="https://www.linkedin.com/in/mandrindra-ranarijaona-793a89147/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <IoLogoLinkedin className="text-[#F4991A] text-3xl hover:text-[#F4991A]/70 " />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+261340700916&text=Hello!"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <IoLogoWhatsapp className="text-[#F4991A] text-3xl hover:text-[#F4991A]/70" />
        </a>

        <a
          href="mailto:herymandrindra@gmail.com?"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdContactMail className="text-[#F4991A] text-3xl hover:text-[#F4991A]/70" />
        </a>
      </div>
    </div>
  );
};

export default ContactLink;
