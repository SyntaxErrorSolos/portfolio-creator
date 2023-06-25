export default function Home() {
  return (
    <div>
      <div className="h-screen flex items-center justify-center flex-col">
        <input
          type="text"
          className="text-4xl text-center border-black border-2 outline-none"
          placeholder="Enter your portfolio name."
        ></input>
        <h1 className="text-3xl font-bold text-black">
          By generating a portfolio, You agree to our{" "}
          <a href="http://localhost:3000/tos" className="underline">Terms Of Service</a> and{" "}
          <a href="http://localhost:3000/privacy" className="underline">Privacy Policy</a>
        </h1>
        <button className="bg-blue-500 px-5 py-3 text-white">Generate</button>
        <h1>This page's layout is intentional.</h1>
      </div>
    </div>
  );
}
