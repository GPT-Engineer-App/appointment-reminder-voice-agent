import { useState } from "react";
import { Container, VStack, Text, Input, Button, HStack, useToast, IconButton } from "@chakra-ui/react";
import { FaMicrophone, FaCalendarCheck } from "react-icons/fa";

const Index = () => {
  const [appointment, setAppointment] = useState("");
  const toast = useToast();

  const handleInputChange = (e) => {
    setAppointment(e.target.value);
  };

  const handleReminder = () => {
    if (appointment.trim() === "") {
      toast({
        title: "Error",
        description: "Please enter an appointment detail.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: "Reminder Set",
      description: `You have set a reminder for: ${appointment}`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    // Here you would integrate with a voice agent API to set the reminder
    // For now, we just log it to the console
    console.log(`Reminder set for: ${appointment}`);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Appointment Reminder</Text>
        <HStack spacing={2}>
          <Input placeholder="Enter your appointment details" value={appointment} onChange={handleInputChange} />
          <IconButton aria-label="Record" icon={<FaMicrophone />} size="lg" />
        </HStack>
        <Button leftIcon={<FaCalendarCheck />} colorScheme="teal" onClick={handleReminder}>
          Set Reminder
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
