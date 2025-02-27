import { ReactNode } from "react";

import { Media } from "../../types/media";

const media: Media[] = [
  {
    id: "1",
    title: "A million dollar baby",
    description: "this is about a girl who wants to be a boxer ...",
    date: new Date(2005, 1, 14),
    category: "movie",
  },
];

const Result = (): ReactNode => {
  return (
    <ul className="result">
      {media.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default Result;
