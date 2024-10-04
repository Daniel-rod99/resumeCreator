import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Divider,
} from "@nextui-org/react";

export default function PersonalInfoModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col gap-2">
      <Button
        radius="full"
        className="text-white shadow-lg bg-gradient-to-tr from-purple-500 to-indigo-500"
        onPress={onOpen}
      >
        Create Resume
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior={"outside"}
        size={"4xl"}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Enter your information
              </ModalHeader>
              <ModalBody>
                <ModalHeader className="flex flex-col p-0 m-0">
                  Personal Information
                </ModalHeader>
                <Input type="text" label="Name" isRequired />
                <Input type="text" label="Last name" isRequired />
                <Input type="email" label="Email" isRequired />
                <Input type="phone" label="Phone" />
                <Input type="text" label="City" />

                <Divider className="my-4" />

                <ModalHeader className="flex flex-col p-0 m-0">
                  Personal Information
                </ModalHeader>
                <Input type="text" label="Name" isRequired />
                <Input type="text" label="Last name" isRequired />
                <Input type="email" label="Email" isRequired />
                <Input type="phone" label="Phone" />
                <Input type="text" label="City" />

                <Divider className="my-4" />

                <ModalHeader className="flex flex-col p-0 m-0">
                  Personal Information
                </ModalHeader>
                <Input type="text" label="Name" isRequired />
                <Input type="text" label="Last name" isRequired />
                <Input type="email" label="Email" isRequired />
                <Input type="phone" label="Phone" />
                <Input type="text" label="City" />
                <ModalHeader className="flex flex-col p-0 m-0">
                  Personal Information
                </ModalHeader>
                <Input type="text" label="Name" isRequired />
                <Input type="text" label="Last name" isRequired />
                <Input type="email" label="Email" isRequired />
                <Input type="phone" label="Phone" />
                <Input type="text" label="City" />
                <ModalHeader className="flex flex-col p-0 m-0">
                  Personal Information
                </ModalHeader>
                <Input type="text" label="Name" isRequired />
                <Input type="text" label="Last name" isRequired />
                <Input type="email" label="Email" isRequired />
                <Input type="phone" label="Phone" />
                <Input type="text" label="City" />
              </ModalBody>
              <ModalFooter className="flex flex-col">
                <div className="flex justify-end gap-5">
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary">Next &gt;</Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
