import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import barnHero from "/public/barn-hero.jpg";
import barnTub from "/public/barn-nook.jpg";
import barnLiving from "/public/barn-living.jpg";
import barnNook from "/public/barn-tub.jpg";
import BlobSvg1 from "../components/BlobSvg1";
import featuresList from "../data/featuresList";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>The barn oldham</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav
        className="flex w-full items-center justify-between px-4 py-4"
        style={{ background: "#F8F7F1" }}
      >
        <div className="text-slate-900">
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </div>
        <div>
          <ul className="flex justify-center list-none mx-auto text-neutral-600 font-bold">
            <li className="px-2  ">
              <Link href="#">
                <a>The Property</a>
              </Link>
            </li>
            <li className="px-2 ">About</li>
            <li className="px-2 ">Contact</li>
          </ul>
        </div>
      </nav>

      <main className="relative flex w-full flex-1 flex-col items-center justify-center text-center">
        {/* ------------- */}
        {/* Hero section */}
        {/* ------------ */}
        <div
          className="justify-around relative w-full flex-col sm:flex-row sm:items-center pt-12 md:flex lg:flex no wrap sm:px-12 md:py-32 text-center md:text-left gap-6 "
          style={{ background: "#F8F7F1" }}
        >
          <BlobSvg1 />
          <div className="flex-col px-8 sm:px-0 mb-8 z-50 md:max-w-xs">
            <h2 className="text-3xl mb-6 font-serif">
              Escape to a relaxing countryside getaway at{" "}
              <span className="text-slate-900 font-bold">the barn</span>
            </h2>
            <p className="mb-10">
              A cottage-feel apartment in the rolling hills of Strinesdale,
              Oldham. The perfect place to escape and take a breather.{" "}
            </p>
            <button className="rounded-full bg-orange-400 px-6 py-1.5">
              <a className="text-white">Book your stay</a>
            </button>
          </div>

          <div className="bg-slate-100 mx-auto sm:mx-0 grow min-h-[25rem] max-w-md flex-col justify-center relative z-90">
            <div className="absolute md:top-7 md:-left-5 md:-bottom-6  z-1 w-full border-2 rounded-bl-[2rem] border-slate-900 "></div>
            <Image src={barnHero} objectFit="cover" layout="fill" />
          </div>
        </div>
        {/* banner seperator */}
        <div
          style={{ backgroundColor: "#6B705C" }}
          className="text-white py-2 w-full flex no-wrap justify-center items-center overflow-hidden"
        >
          <p className="opacity-70 w-max truncate">
            Escape to Saddlesworth | Escape to Saddlesworth | Escape to
            Saddlesworth | Escape to Saddlesworth | Escape to Saddlesworth |
            Escape to Saddlesworth
          </p>
        </div>
        {/* // 3 column component */}
        <div className="block mx-4 md:grid md:grid-flow-col md:auto-cols-1fr mx-4 py-10 [&>*]:pt-10 md:[&>*]:pt-0 md:[&>*]:px-8 md:my-20">
          <div>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            <h3 className="font-bold py-2">A Home From Home</h3>
            <p>
              The Barn's homely, cottage-inspired decor will leave you feeling
              comfortable and at home in the countryside.{" "}
            </p>
          </div>
          <div>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            <h3 className="font-bold py-2">A Personal Touch</h3>
            <p>
              At The Barn, you're never far from being able to ask for
              directions or learn about the local area. The Barn's host, Wendy,
              is nearby to help.{" "}
            </p>
          </div>
          <div>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            <h3 className="font-bold py-2">Plenty To See</h3>
            <p>
              The Barn is in the perfect location for outdoorsy guests to amble
              to local picturesque villages. Bikes are also available to borrow
              (free of charge!).
            </p>
          </div>
        </div>
        {/* image and card component */}
        <div className="grid w-full place-content-center sm:max-w-7xl sm:grid-cols-12 sm:grid-row-3">
          <div className="relative min-h-[30rem] w-full sm:row-start-1 sm:row-end-3 sm:col-start-2 sm:col-end-8">
            <Image src={barnLiving} objectFit="cover" layout="fill" />
          </div>
          <div className="flex-col mx-4 sm:col-start-6 sm:col-end-12 sm:row-start-1 sm:row-end-1 z-10 p-8 border-2 border-black my-2 sm:mt-10 bg-neutral-50 rounded-tr-xl text-left py-10 px-12">
            <h3 className="font-bold">The Property</h3>
            <p className="mt-2 font-serif">
              Perfect for couples with its picturesque location and cosy decor,
              The Barn is a cottage-feel home from home. The 1-bedroom apartment
              also has a fully-fitted kitchen, bathroom and lounge area, so
              there's plenty of room to sit back, relax and unwind.
            </p>
            <button className="mt-8">Learn more</button>
          </div>
        </div>
        {/* image and card component */}
        <div className=" grid  sm:max-w-7xl sm:grid-cols-12 sm:grid-row-3 mx-auto">
          <div className="flex-col mx-4 order-1 sm:order-2 sm:col-start-2 sm:col-end-7 sm:row-start-1 sm:row-end-2 z-10 border-2 border-black my-2 sm:mt-10 bg-neutral-50 rounded-tr-xl text-left py-10 px-12">
            <h3 className="font-bold">The Location</h3>
            <p className="mt-2 font-serif">
              Nestled in the rolling hills of Strinesdale, outdoorsy guests who
              love a hike or a bike ride are only a short amble away from the
              picturesque local villages of Denshaw, Uppermill and Greenfield.
            </p>
            <button className="mt-8">Learn more</button>
          </div>
          <div className="relative min-h-[30rem] w-full sm:row-start-1 sm:row-end-3 sm:col-start-6 sm:col-end-12">
            <Image src={barnNook} objectFit="cover" layout="fill" />
          </div>
        </div>
        {/* content and feature block */}
        <div
          className="w-full text-white py-8 md:text-left md:px-8 md:py-10"
          style={{ background: "#6b705c" }}
        >
          <h2 className="md:text-left font-serif font-bold text-3xl mb-8 md:mb-8">
            Why stay?
          </h2>
          <div className="grid w-full items-start px-4 gap-4 md:gap-10 grid-cols-1 md:grid-cols-3 md:grid-rows-2">
            <div className="flex flex-col items-center md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="current-color"
                className="w-6 h-6 mb-4"
              >
                <path
                  fillRule="evenodd"
                  d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="mb-2 font-bold">Relax, Recoup and Recharge</h2>
              <p>
                Hidden away atop the Strinesdale hills, The Barn is the perfect
                countryside location to escape from modern-day hustle and
                bustle.
              </p>
            </div>
            <div className="flex flex-col items-center md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="current-color"
                className="w-6 h-6 mb-4"
              >
                <path
                  fillRule="evenodd"
                  d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="mb-2 font-bold">A Comfortable Stay</h2>
              <p>
                With a double bedroom, bathroom, fully-fitted kitchen and lounge
                area, The Barn has all the space you need to relax and unwind.
              </p>
            </div>
            <div className="flex flex-col items-center md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="current-color"
                className="w-6 h-6 mb-4"
              >
                <path
                  fillRule="evenodd"
                  d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="mb-2 font-bold">Local Landmarks</h2>
              <p>
                With Strinesdale Reservoir and Bishop's Park just a short walk
                away, and the famously picturesque villages of Denshaw,
                Uppermill and Greenfield.
              </p>
            </div>
            <div className="flex flex-col items-center md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="current-color"
                className="w-6 h-6 mb-4"
              >
                <path
                  fillRule="evenodd"
                  d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="mb-2 font-bold">A Personal Touch</h2>
              <p>
                With The Barn's host - Wendy - nearby, you'll never be far from
                a friendly face and the benefit of local knowledge.{" "}
              </p>
            </div>
            <div className="flex flex-col items-center md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="current-color"
                className="w-6 h-6 mb-4"
              >
                <path
                  fillRule="evenodd"
                  d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="mb-2 font-bold">Free Bikes</h2>
              <p>
                Guests who love the outdoors are more than welcome to take in
                the scenery and rolling hills on wheels (for free!).
              </p>
            </div>
            <div className="flex flex-col items-center md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="current-color"
                className="w-6 h-6 mb-4"
              >
                <path
                  fillRule="evenodd"
                  d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="mb-2 font-bold">Pub Grub</h2>
              <p>
                A stone's throw from a local family-run pub, you don't need to
                venture far to get a proper pint and a bite to eat at short
                notice.
              </p>
            </div>
          </div>
          {featuresList.map((feature) => {
            return (
              <div>
                <h2>{feature.title}</h2>
                <h2>{feature.description}</h2>
                <>{feature.icon}</>
              </div>
            );
          })}
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
