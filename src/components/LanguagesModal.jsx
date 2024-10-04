// src/components/LanguagesModal.jsx
import { Modal, Input, Button } from "@nextui-org/react";
import { useState } from "react";

const LanguagesModal = ({ visible, onClose, onNext }) => {
  const [languages, setLanguages] = useState([{ language: "" }]);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedLanguages = [...languages];
    updatedLanguages[index][name] = value;
    setLanguages(updatedLanguages);
  };

  const addLanguage = () => {
    setLanguages([...languages, { language: "" }]);
  };

  return (
    <Modal open={visible} onClose={onClose}>
      <Modal.Header>Languages</Modal.Header>
      <Modal.Body>
        {languages.map((lang, index) => (
          <Input
            key={index}
            label="Language"
            name="language"
            fullWidth
            placeholder="Enter a language"
            value={lang.language}
            onChange={(e) => handleInputChange(index, e)}
          />
        ))}
        <Button onClick={addLanguage}>Add Another Language</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button flat color="error" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={() => onNext(languages)}>Finish</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LanguagesModal;
