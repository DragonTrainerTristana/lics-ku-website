export const MainHeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] bg-blue-950 w-100vw relative">
      <video
        src="/hero.webm"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        preload="auto"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col p-4 md:p-10 gap-4 justify-end md:justify-center">
        <h1 className="text-white text-6xl font-bold">LICS</h1>
        <h2 className="text-white text-2xl font-bold">
          Lab for Informatics, Communications, and Systems
        </h2>
        <p className="text-white text-l whitespace-pre-line">
          {`Our research group is led by Prof. Sang Hyun Lee in the school of
          Electrical Engineering at Korea University.

          Our research area involves a range of topics in communications,
          learning, networking,
          optimization, control, signal processing, information theory, system
          theory, and embedded system development for information, materials,
          biomedical, physics, social science, energy-related applications.`}
        </p>
      </div>
    </div>
  );
};
