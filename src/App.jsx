import qrCode from "./images/image-qr-code.png";

export const App = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-300 h-screen">
      <div className="flex flex-col px-4 pt-4 pb-6 gap-6 rounded-xl bg-current h-[500px] w-[320px]">
        <img
          className="w-[288px] h-[288px] rounded-lg"
          src={qrCode}
          alt="qr=code"
        />
        <div className="flex flex-col text-center gap-4">
          <p className="text-slate-900 font-bold text-[22px]">Improve your front-end skills by building projects</p>
          <p className="text-slate-500 text-[15px] tracking-wide font-regular">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
};
