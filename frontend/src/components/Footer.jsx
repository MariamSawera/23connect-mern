const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#F7F7F7] border-t border-[#E5E5E5] z-50">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="h-[44px] flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-[6px]">
            <div className="flex items-center justify-center w-[18px] h-[18px] rounded bg-[#E9EEF5] text-[#3B82F6] text-[10px] font-semibold">
              23
            </div>
            <span className="uppercase tracking-[0.12em] font-medium text-[11px] text-[#6B7280]">
              Connect Academic Hub
            </span>
          </div>

          {/* Center */}
          <div className="flex gap-[18px] text-[12px] text-[#6B7280]">
            <a className="hover:text-[#374151] cursor-pointer">About</a>
            <a className="hover:text-[#374151] cursor-pointer">Privacy</a>
            <a className="hover:text-[#374151] cursor-pointer">Support</a>
          </div>

          {/* Right */}
          <div className="text-[11px] text-[#9CA3AF]">
            © 2024 University Portal. All rights reserved
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
