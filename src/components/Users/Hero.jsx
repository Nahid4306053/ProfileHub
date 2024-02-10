export default function Hero() {
  return (
    <div
      className="hero min-h-[80vh]"
      style={{ backgroundImage: "url(https://i.ibb.co/BCHRw7N/Screenshot-2020-06-25-at-20-23-58-1.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-3xl">
          <h1 className="mb-5 font-strike  italic md:text-7xl text-4xl font-bold font-">
            Discover Your Digital Identity
          </h1>
          <p className="mb-5 text-xl">
            Welcome to our platform, where you can explore and define your
            digital identity. Discover new connections, showcase your talents,
            and shape your future in the digital world.

          </p>
        </div>
      </div>
    </div>
  );
}
