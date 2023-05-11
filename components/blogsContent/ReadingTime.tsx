type Props = {
  date: string;
  time: number;
};

export default function ReadingTime({ date, time }: Props) {
  const timeToReadOneWord: number = 0.008;
  const readTimeOfBlogContent = Math.round(time * timeToReadOneWord);
  return (
    <section className="flex justify-between items-center pt-10 mx-auto w-4/5">
      <span>
        {date.split("T")[0]}&nbsp;·&nbsp;{readTimeOfBlogContent} min read
      </span>
      <span className="scale-150 cursor-pointer">···</span>
    </section>
  );
}
