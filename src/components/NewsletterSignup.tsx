import {
  Box,
  Text,
  Button,
  Center,
  Heading,
  Stack,
  Icon,
  Collapse,
  useToken,
  Divider,
} from "@chakra-ui/react";
import { Form, Formik, FormikValues } from "formik";
import { useState } from "react";
import { FiAtSign, FiUser } from "react-icons/fi";
import Confetti from "react-dom-confetti";
import { ckAxios } from "../lib/axios";
import { confettiConfig } from "../lib/confetti";
import { newsletterSchema } from "../lib/formSchemas";
import { InputField } from "./Forms/InputField";

export const NewsletterSignup = () => {
  const [afterSubmit, setAfterSubmit] = useState(false);
  const [whiteAlpha300] = useToken("colors", ["whiteAlpha.400"]);

  const handleSubmit = async (values: FormikValues) => {
    const { email, firstName } = values;
    const bodyFormData = new FormData();
    bodyFormData.append("email_address", email);
    bodyFormData.append("fields[first_name]", firstName);

    await ckAxios.post(
      "https://app.convertkit.com/forms/2242795/subscriptions",
      bodyFormData
    );
    setAfterSubmit(true);
  };

  return (
    <Center mx="3" my="7">
      <Box
        py="4"
        boxShadow={`0 0 0 2px ${whiteAlpha300}`}
        px="5"
        bg="gray.900"
        border="12px solid transparent"
        rounded="lg"
        pos="relative"
        background="linear-gradient(#2c303b, #2c303b)
        padding-box,
        repeating-linear-gradient(-45deg,
        #fa519a 0, #fa519a 12.5%,
        transparent 0, transparent 25%,
        #2d84d1 0, #2d84d1 37.5%,
        transparent 0, transparent 50%)
        0 / 5em 5em"
      >
        <Collapse in={!afterSubmit}>
          <Formik
            initialValues={{
              email: "",
              firstName: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={newsletterSchema}
          >
            {({ isSubmitting }) => (
              <Form>
                <Stack spacing="3">
                  <Heading fontSize="2xl" textAlign="center">
                    Looking for the source code?
                  </Heading>
                  <Text textAlign="center">
                    If you&apos;re keen to get your hands on the code, insert
                    your email <br />
                    below. We will send you a monorepo with NextJS and Strapi
                    <br />
                    ready for your next big project!
                  </Text>
                  <Divider />
                  <InputField
                    leftAddonElement={<Icon as={FiUser} color="gray.500" />}
                    placeholder="First Name"
                    name="firstName"
                    type="text"
                  />
                  <InputField
                    leftAddonElement={<Icon as={FiAtSign} color="gray.500" />}
                    placeholder="Email"
                    name="email"
                    type="email"
                  />
                  <Button
                    colorScheme="purple"
                    size="md"
                    isLoading={isSubmitting}
                    type="submit"
                  >
                    Get Repo Now!
                  </Button>
                  <Text textAlign="center" fontSize="sm">
                    We won&apos;t send you spam. Unsubscribe at any time. <br />
                  </Text>
                </Stack>
              </Form>
            )}
          </Formik>
        </Collapse>
        {afterSubmit && (
          <Text m="4">
            Success, check your email for the download link!{" "}
            <span aria-label="gift emoji" role="img">
              🎁
            </span>
          </Text>
        )}
        <Box mx="auto" left="50%" pos="absolute">
          <Confetti active={afterSubmit} config={confettiConfig} />
        </Box>
      </Box>
    </Center>
  );
};
