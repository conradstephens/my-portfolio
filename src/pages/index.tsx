import { Navbar } from "@/components";
import Image from "next/image";

export default function Index() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="pt-20" />
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="py-2 text-5xl font-medium text-primary">
              Conrad Stephens
            </h1>
            <h2 className="py-2 text-2xl">Fontend developer</h2>
            <p className="text-md py-5 leading-8 text-gray-700 dark:text-gray-500">
              {
                "Freelance software developer building applications for your needs 💻. Let's get in touch!🚀"
              }
            </p>
            <div className=" flex justify-center gap-16 py-3">
              <label className="btn-ghost btn text-3xl text-gray-600 dark:text-gray-400">
                <i className="fa-brands fa-twitter"></i>
              </label>
              <label className="btn-ghost btn text-3xl text-gray-600 dark:text-gray-400">
                <i className="fa-brands fa-github"></i>
              </label>
              <label className="btn-ghost btn text-3xl text-gray-600 dark:text-gray-400">
                <i className="fa-brands fa-discord"></i>
              </label>
            </div>
            <div className="relative mx-auto mt-20 h-80 w-80 overflow-hidden rounded-full bg-gradient-to-b from-primary">
              <Image
                alt="portrait"
                fill
                style={{ objectFit: "cover", marginLeft: 10 }}
                src="https://gateway.pinata.cloud/ipfs/QmTNXiXFaRfzBJbZZ5nTJJY2cxiypnbeo77W1JbmqvYmkv"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
