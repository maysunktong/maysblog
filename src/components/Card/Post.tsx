import clsx from "clsx";

type PostProps = {
  children: React.ReactNode;
  className?: string;
};

export const Post = (props: PostProps) => {
  const { children, className } = props;

  return (
    <div
      className={clsx(
        className,
        "post-bg opacity-90 rounded-xl shadow-lg p-8 my-8 shadow-slate-300"
      )}
    >
      {children}
    </div>
  );
};
