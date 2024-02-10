/* eslint-disable react/prop-types */
export default function PageBanner({ bgimg, title, description }) {
  return (
    <div className="min-h-[400px]" style={{ background: `url(${bgimg})`, backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundSize: "1920px 580px ", }} >
      <div className="content px-10 min-h-[400px] w-full bg-[#00000076] flex justify-center items-center">
        <div className="content text-center max-w-xl text-white space-y-4">
          <h1 className="text-5xl font-bold ">{title}</h1>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
}
