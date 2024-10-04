import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import Stepper from "./Stepper";
import { motion } from "framer-motion";

export default function WorkExperienceModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <motion.div>
      <Button
        radius="full"
        className="bg-gradient-to-tr from-purple-500 to-indigo-500 text-white shadow-lg"
        onPress={onOpen}
      >
        Create Resume
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="auto">
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Personal Information
              </ModalHeader>
              <ModalBody>
                <Input type="text" label="Name" isRequired />
                <Input type="text" label="Last name" isRequired />
              </ModalBody>
              <ModalFooter className="flex flex-col">
                <div className="flex justify-between">
                  <Button color="danger" variant="flat">
                    &lt; Prev
                  </Button>
                  <Button color="primary">Next &gt;</Button>
                </div>
                <Stepper />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </motion.div>
  );
}
