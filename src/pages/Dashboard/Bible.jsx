import React, { useState } from "react";
import {
  Search,
  Download,
  Globe,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import VideoImg from "../../assets/video.png";
import BibleReference from "../../components/Dashboard/Bible/BibleRefrence";
import BibleVersionModal from "../../components/Dashboard/Bible/BibleVersion";

const Bible = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVersion, setSelectedVersion] = useState("KJV");

  return (
    <>
      
      <div className="w-full max-w-full mx-auto bg-white border border-gray-200 rounded-lg p-4 space-y-4">
        {/* Header */}
        <div className="flex flex-col bg-[#FAFAFA] border border-[#D7D7D7] py-2 px-3 rounded-md sm:flex-row sm:items-center sm:justify-between gap-2">
        
          <div className="flex items-center justify-between w-full sm:w-auto">
            <h2 className="text-lg font-semibold font-poppins">Psalm 119</h2>

            
            <div className="flex sm:hidden items-center">
              <div className="relative">
                {!isOpen ? (
                  <button
                    onClick={() => setIsOpen(true)}
                    className="py-2 px-2 bg-[#F3F3F3] border border-[#DDDCDC] rounded-lg ml-2"
                  >
                    <Search size={16} className="text-gray-600" />
                  </button>
                ) : (
                  <div className="flex items-center bg-[#F3F3F3] border border-[#DDDCDC] rounded-md px-2 w-40 ml-2">
                    <Search size={16} className="text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="flex-1 px-2 py-[6px] w-32 bg-[#F3F3F3] text-sm outline-none"
                      autoFocus
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

        
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            
            <div className="hidden sm:block relative">
              {!isOpen ? (
                <button
                  onClick={() => setIsOpen(true)}
                  className="py-3 px-3 bg-[#F3F3F3] border border-[#DDDCDC] rounded-lg"
                >
                  <Search size={16} className="text-gray-600" />
                </button>
              ) : (
                <div className="flex items-center bg-[#F3F3F3] border border-[#DDDCDC] rounded-md px-2 w-48">
                  <Search size={16} className="text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="flex-1 px-2 py-[10px] bg-[#F3F3F3] text-sm outline-none"
                    autoFocus
                  />
                </div>
              )}
            </div>

            {/* Download */}
            <button className="flex items-center gap-1 font-poppins px-3 py-3 bg-[#F3F3F3] border border-[#DDDCDC] rounded-md text-xs">
              <Download size={16} /> Download for offline
            </button>

            {/* Language Dropdown */}
            <div className="relative">
              <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-1 md:px-3 px-10 py-3 font-poppins bg-[#F3F3F3] border border-[#DDDCDC] rounded-md text-xs">
                <Globe size={16} /> KJV <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bible Version Modal */}
        <BibleVersionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedVersion={selectedVersion}
          setSelectedVersion={setSelectedVersion}
        />

        {/* Verses */}
        <div onClick={() => setOpen(true)} className="bg-[#F6F6F6] cursor-pointer rounded-lg py-4 px-3 space-y-2 md:text-sm text-xs text-black font-poppins overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          <p>1. Blessed are the undefiled in the way, who walk in the law of the Lord.</p>
          <p>2. Blessed are they that keep his testimonies, and that seek him with the whole heart.</p>
          <p>3. They also do no iniquity: they walk in his ways.</p>
          <p>4. Thou hast commanded us to keep thy precepts diligently.</p>
          <p>5. O that my ways were directed to keep thy statutes!</p>
          <p>6. Then shall I not be ashamed, when I have respect unto all thy commandments.</p>
          <p>7. I will praise thee with uprightness of heart, when I shall have learned thy righteous judgments.</p>
          <p>8. I will keep thy statutes: O forsake me not utterly.</p>
          <p>9. Wherewithal shall a young man cleanse his way? by taking heed thereto according to thy word.</p>
          <p>10. With my whole heart have I sought thee: O let me not wander from thy commandments.</p>
          <p>11. Thy word have I hid in mine heart, that I might not sin against thee.</p>
          <p>12. Blessed art thou, O Lord: teach me thy statutes.</p>
          <p>13. With my lips have I declared all the judgments of thy mouth.</p>
          <p>14. I have rejoiced in the way of thy testimonies, as much as in all riches.</p>
          <p>15. I will meditate in thy precepts, and have respect unto thy ways.</p>
          <p>16. I will delight myself in thy statutes: I will not forget thy word.</p>
        </div>
      </div>

      {/* Bible Refrence Modal */}
      <BibleReference isOpen={open} onClose={() => setOpen(false)} />

      <div className="w-full max-w-full mx-auto bg-white rounded-lg border border-gray-200 py-3 px-5 mt-4">
        <div className="flex items-center justify-between">
        
          <button className="flex items-center gap-1 text-lg font-semibold font-poppins">
            Psalm 119 <ChevronUp size={16} />
          </button>

        
          <button className="transition">
            <img src={VideoImg} className="w-[40px] object-contain" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Bible;
