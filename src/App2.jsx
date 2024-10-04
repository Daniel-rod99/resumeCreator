import { useState } from "react";
import PersonalInfoModal from "./components/PersonalInfoModal";
import WorkExperienceModal from "./components/WorkExperienceModal";
import LanguagesModal from "./components/LanguagesModal";
import { Button } from "@nextui-org/react";
import { PDFViewer } from "@react-pdf/renderer";
import ResumePDF from "./components/ResumePDF";

export default function App() {
  const [step, setStep] = useState(0);
  const [personalInfo, setPersonalInfo] = useState(null);
  const [workExperiences, setWorkExperiences] = useState([]);
  const [languages, setLanguages] = useState([]);

  // Handlers para avanzar en el flujo
  const handlePersonalInfoNext = (data) => {
    setPersonalInfo(data);
    setStep(1);
  };

  const handleWorkExperienceNext = (data) => {
    setWorkExperiences(data);
    setStep(2);
  };

  const handleLanguagesFinish = (data) => {
    setLanguages(data);
    setStep(3); // Aquí sería el paso donde generamos el resumen
  };

  return (
    <div className="text-center p-8 h-[100vh] m-auto flex flex-col items-center justify-center gap-8">
      {/* Botón para iniciar la creación del currículum */}
      <Button
        radius="full"
        className="bg-gradient-to-tr from-purple-500 to-indigo-500 text-white shadow-lg"
        onClick={() => setStep(0)}
      >
        Create a Resume
      </Button>

      {/* Modales para cada sección */}
      {step === 0 && (
        <PersonalInfoModal
          visible={step === 0}
          onClose={() => setStep(-1)}
          onNext={handlePersonalInfoNext}
        />
      )}

      {step === 1 && (
        <WorkExperienceModal
          visible={step === 1}
          onClose={() => setStep(-1)}
          onNext={handleWorkExperienceNext}
        />
      )}

      {step === 2 && (
        <LanguagesModal
          visible={step === 2}
          onClose={() => setStep(-1)}
          onNext={handleLanguagesFinish}
        />
      )}

      {step === 3 && (
        <div className="text-center p-8">
          <h2>Resume Summary</h2>
          <p>
            <strong>Email:</strong> {personalInfo.email}
          </p>
          <p>
            <strong>Phone:</strong> {personalInfo.phone}
          </p>
          {personalInfo.extraPhone && (
            <p>
              <strong>Extra Phone:</strong> {personalInfo.extraPhone}
            </p>
          )}
          <p>
            <strong>Address:</strong> {personalInfo.address}
          </p>
          {personalInfo.extraAddress && (
            <p>
              <strong>Extra Address:</strong> {personalInfo.extraAddress}
            </p>
          )}

          <h3>Work Experience</h3>
          {workExperiences.map((exp, index) => (
            <div key={index}>
              <p>
                <strong>Company:</strong> {exp.company}
              </p>
              <p>
                <strong>Duration:</strong> {exp.duration}
              </p>
              <p>
                <strong>Description:</strong> {exp.description}
              </p>
            </div>
          ))}

          <h3>Languages</h3>
          {languages.map((lang, index) => (
            <p key={index}>
              <strong>Language:</strong> {lang.language}
            </p>
          ))}

          <Button
            radius="full"
            className="bg-gradient-to-tr from-purple-500 to-indigo-500 text-white shadow-lg"
            onClick={() => setStep(4)} // Pasamos al paso 4, donde generaremos el PDF
          >
            Generate Resume
          </Button>
        </div>
      )}

      {step === 4 && (
        <div className="w-full h-full">
          <PDFViewer width="100%" height="600">
            <ResumePDF
              personalInfo={personalInfo}
              workExperiences={workExperiences}
              languages={languages}
            />
          </PDFViewer>
        </div>
      )}
    </div>
  );
}
