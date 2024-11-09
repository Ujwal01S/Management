export const BeforeAfter = () => {
  return (
    <>
      <div
        className="w-fit relative h-16 px-6 bg-slate-400 before:absolute before:top-1/2
    before:w-6 before:h-6 before:rounded-full before:-translate-y-1/2  before:bg-[#dc397d] "
      >
        beforeAfter bgcolor
      </div>

      <div
        className="w-fit h-16 px-6 bg-slate-400 before:top-2
            before:w-3 before:h-6 before:rounded-full before:-translate-y-1/2  before:content-['bg-red-700'] "
      >
        InsideContent
      </div>

      <div
        className="w-96 h-72 bg-green-700 p-20
                hover:before:content-['before'] 
                before:text-4xl before:text-black-300
                hover:after:content-['after'] 
                after:text-5xl after:text-red-300"
      >
        <h1 className="text-4xl text-white">Text BeforeAfter</h1>
      </div>
    </>
  );
};
