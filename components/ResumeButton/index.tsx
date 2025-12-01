interface ResumeButtonT{
    extraCSS?:string
}

const ResumeButton = ({extraCSS}:ResumeButtonT) => {
  return (
    <button className={`self-start  bg-[#191919] hover:bg-[#262626] p-2 xl:p-3 rounded-xl ${extraCSS}`}>
      <a className="" href="/assets/Yashas Resume.pdf" target="_blank">
        My Resume
      </a>
    </button>
  );
};

export default ResumeButton;
