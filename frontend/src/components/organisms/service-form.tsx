"use client";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../atoms/ui/form";
import FormWrapper from "../molecules/form-wrapper";
import InputGroup from "../molecules/input-group";
import { Input } from "../atoms/ui/input";
import { Button } from "../atoms/ui/button";
import { ReactNode } from "react";

function FormGroup({ children }: { children: ReactNode }) {
  return <div className="mb-4 flex flex-col gap-4">{children}</div>;
}

function FormGroupHeader({ children }: { children: ReactNode }) {
  return <h2 className="text-xl font-bold md:text-2xl">{children}</h2>;
}

export default function ServiceForm() {
  const form = useForm();

  function onSubmit() {}

  return (
    <>
      <Form {...form}>
        <FormWrapper onSubmit={form.handleSubmit(onSubmit)}>
          <FormGroup>
            <FormGroupHeader>Personal Information</FormGroupHeader>
            <InputGroup variant="application">
              <FormField
                name="fullname"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full name:</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email:</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <FormGroupHeader>Personal Information</FormGroupHeader>
            <InputGroup variant="application">
              <FormField
                name="fullname"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full name:</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email:</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </InputGroup>
          </FormGroup>

          <Button type="submit" variant="secondary" className="mt-4">
            Submit
          </Button>
        </FormWrapper>
      </Form>
    </>
  );
}
