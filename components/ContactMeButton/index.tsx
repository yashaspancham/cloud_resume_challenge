type ContactMeButtonProps = {
  extraCSS?: string;
};

const ContactMeButton = ({extraCSS}:ContactMeButtonProps) => {
  return (
    <a
      href="#contact-me"
      className={`not-italic skew-x-0 bg-blue-700 hover:bg-blue-600 p-2 xl:p-3 rounded-lg ${extraCSS}`}
    >
      Contact Me
    </a>
  );
};

export default ContactMeButton;
