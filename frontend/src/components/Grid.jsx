import Note from "./Note";

const Grid = () => {
  return (
    <section className="w-full max-w-4/5 max-sm:max-w-[90%] mx-auto my-8">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(12.5rem,1fr))] gap-3 max-sm:gap-5">
        <Note />
      </div>
    </section>
  )
}

export default Grid;