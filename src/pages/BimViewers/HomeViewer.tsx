import Header2 from "@/components/app/Header2";

const HomeViewer = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header2 />

      {/* Main Content */}
      <main className="flex flex-1 w-full px-12 py-8 items-center">
        {/* Left Section */}
        <div className="flex-1 pr-12">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 leading-snug">
              Easily view and share designs in your browser.
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Autodesk Viewer makes it easy to share views of your designs and
              collaborate remotely.
            </p>
            <button className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold shadow-lg">
              <a className="text-white" href="/signin">Get started viewing</a>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center">
          <div className="w-[750px] h-[700px] bg-gray-200 rounded-lg shadow-lg overflow-hidden relative border border-gray-300">
            {/* Video Viewer */}
            <video
              src="https://viewer.autodesk.com/3fd90895ead7ef5981939366b9a43346.mp4"
              controls
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
            ></video>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeViewer;
