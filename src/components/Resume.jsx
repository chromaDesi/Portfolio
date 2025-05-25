const Resume = () => {
  return (
    <div className="flex flex-col items-center p-8 min-h-screen bg-white">
      <h1 className="text-3xl font-bold mb-2">Varun Parekh's</h1>
      <h3 className="text-xl font-semibold mb-6">Official Resume</h3>
      <iframe
        src="/varuns_resume.pdf" // Place PDF in public/ folder
        className="w-full max-w-5xl h-[80vh] shadow-lg rounded"
        title="Varun Parekh Resume"
      ></iframe>
    </div>
  );
};

export default Resume;