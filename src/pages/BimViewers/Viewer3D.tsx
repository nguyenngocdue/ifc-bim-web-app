import CustomSidebar from "@/components/app/CustomSidebar ";
import Header2 from "@/components/app/Header2";
import View3DTool from "@/components/app/View3DTool";

const Viewer3D = () => {
  
    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Header */}
            <Header2 />
            {/* Main Content */}
            <main className="flex flex-1 w-full">
                {/* Sidebar */}
                <CustomSidebar/>
                {/* Main 3D Viewer */}
                <section className="flex-1 p-4 flex justify-center items-center bg-gray-50">
                    <div className="w-[1200px] h-[700px] bg-gray-200 rounded-lg shadow-md overflow-hidden relative border border-gray-300">
                    </div>
                </section>
            </main>

            {/* Tools */}
           <View3DTool/>
        </div>
    );
};

export default Viewer3D;
