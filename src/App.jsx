import "./App.css";
import qr from "./images/image-qr-code.png";

const App = () => {
  return (
    <>
      <div className="flex w-screen  h-screen items-center justify-center bg-slate-300">
        <div className=" flex flex-col w-[320px] h-[499px] bg-white rounded-lg shadow-lg">
          <img
            src={qr}
            alt="qr-code"
            className="w-[288px] h-[288px] m-4 rounded-md "
          />
          <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="flex  w-[256px] h-[52px]text-center text-xl items-center justify-center font-bold text-slate-900">
              Improve your front-end skills by building projects
            </h1>
            <p className="text-center text-sm w-[256px]  h-[63px] flex items-center justify-center text-slate-500 ">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
