type SubtitleProps = {
  text: string;
};

const SubTitle = ({ text }: SubtitleProps) => {
  return (
    <h3 className="text bg-center text-2xl text-yellow-200 my-4">{text}</h3>
  );
};

export default SubTitle;
