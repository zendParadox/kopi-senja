export default function Jumbotron() {
  return (
    <section className="relative h-screen bg-gray-700 items-center flex">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/videos/vidcut.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="relative px-4 mx-auto max-w-screen-xl  xl:px-20 xl:text-left text-center py-24 lg:py-56 z-20">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight  leading-none text-white md:text-5xl lg:text-6xl">
          Temukan Ketenangan dalam Setiap Tegukan
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300  lg:text-xl xl:max-w-2xl">
          Kopi Senja menyajikan biji kopi lokal terbaik yang disangrai dengan
          penuh cinta untuk momen berhargamu.
        </p>
        <button className="sm:w-fit w-full group px-3.5 py-2 outline-2 outline-indigo-200 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
          <span className="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
            Kenali Kami Lebih Dekat
          </span>
          <svg
            className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none">
            <path
              d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
              stroke="#4F46E5"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
