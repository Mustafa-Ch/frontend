const BlurFooter = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[224px] pointer-events-none z-0 overflow-hidden">
     
      <div className="w-full h-full bg-gradient-to-b from-black/80 via-black/40 to-black/0 backdrop-blur-[100px]" />
    </div>
  );
};

export default BlurFooter;
