import { Blob, Navbar } from "@/components";

export default function Index() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex-col-1 flex h-3/6 items-center justify-center">
        <div className="relative flex flex-col content-center items-center">
          <div className="absolute left-2/4 top-2/4 translate-y-[-50%] translate-x-[-50%]">
            <Blob />
          </div>
          <h1 className="relative text-3xl font-bold underline dark:text-white">
            Hello world!
          </h1>
        </div>
      </div>
    </div>
  );
}
