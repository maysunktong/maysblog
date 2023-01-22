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
        "opacity-90 rounded-2xl shadow-lg p-6 shadow-slate-300"
      )}
    >
      {children}
    </div>
  );
};
