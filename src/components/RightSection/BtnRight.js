export default function BtnRight(props) {
  const variants = {
    watch: "gdr-btn",
    download: "bg-white/5",
  };
  const pickedVariant = variants[props.variant];
  return (
    <button
      className={`${pickedVariant} items-center justify-center w-[272px] h-[80px] flex gap-4 rounded-full font-medium text-2xl hover:opacity-80`}
    >
      {props.children}
    </button>
  );
}
