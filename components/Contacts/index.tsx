import Link from "next/link";


const Contects = () => {
  return (
    <div className="flex gap-10 mt-10">
      <Link href="https://github.com/yashaspancham" target="_blank">
        <img
          src="/assets/logo/github.png"
          alt="Github Profile"
          width={40}
          height={40}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/yashas-pancham-k-r-b79408249/"
        target="_blank"
      >
        <img
          src="/assets/logo/linkedin.png"
          alt="linkedin Profile"
          width={40}
          height={40}
        />
      </Link>
      <Link href="mailto:yashaspancham@gmail.com">
        <img
          src="/assets/logo/gmail.png"
          alt="gmail Profile"
          width={40}
          height={40}
        />
      </Link>
      <Link href="tel:+918073980836">
        <img
          src="/assets/logo/mobile.png"
          alt="mobile Profile"
          width={40}
          height={40}
        />
      </Link>
    </div>
  );
};

export default Contects;
