import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik, FormikErrors, FormikValues } from "formik";
import Head from "next/head";

export default function Login(props) {
  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Rohan's Website" />
      </Head>
      <Flex justifyContent="center" my={50}>
        <Center my="auto" flexDir="column">
          <Box>
            <Text fontSize="6xl">Login</Text>
          </Box>
          <Box my={30}>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {(props) => {
                return (
                  <Form>
                    <Field name="email">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.email && form.touched.email}
                        >
                          <FormLabel htmlFor="email">Email ID</FormLabel>
                          <Input {...field} id="email" placeholder="Email ID" />
                          <FormErrorMessage>
                            {form.errors.email}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="password">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.password && form.touched.password
                          }
                        >
                          <FormLabel htmlFor="password">Password</FormLabel>
                          <Input
                            {...field}
                            id="password"
                            type="password"
                            placeholder="password"
                          />
                          <FormErrorMessage>
                            {form.errors.password}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Center>
                      <Button
                        mt={4}
                        colorScheme="teal"
                        isLoading={props.isSubmitting}
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Center>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Center>
      </Flex>
    </div>
  );
}
