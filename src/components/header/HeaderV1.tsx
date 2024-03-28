import clsx from "clsx";

const HeaderV1 = () => {
  return (
    <section className={clsx("w-full h-10", "bg-stone-500", "shadow-2xl")}>
      <div className={clsx("font-orbitron text-4xl")}>
        <span className="text-stone-50">{"<"}</span>
        <span className="text-stone-800">Jansen</span>
        <span className="text-stone-50">{"/>"}</span>
      </div>
      <div>Menu</div>
    </section>
  );
};

export default HeaderV1;
