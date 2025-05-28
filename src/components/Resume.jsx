const Resume = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8 min-h-screen bg-black">
      <h1 className="text-3xl font-bold mb-1 text-stone-50 text-center">
        Varun Parekh's
      </h1>
      <h3 className="text-lg sm:text-xl font-semibold mb-6 text-primary text-center">
        Official Resume
      </h3>

      <div className="w-full max-w-5xl aspect-[8.5/11] sm:h-[80vh]">
        <iframe
          src="/varuns_resume.pdf"
          className="w-full h-full rounded shadow-lg border border-gray-700"
          title="Varun Parekh Resume"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
