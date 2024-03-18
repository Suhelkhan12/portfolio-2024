"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/types";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Button } from "../ui/button";

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" text-lg font-medium">Name:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your name"
                  {...field}
                  className="border-0 border-b border-b-darkCardBorder bg-transparent px-0 placeholder:text-basicMediumGray"
                  style={{ boxShadow: "none", background: "transparent" }}
                  // Add this line to remove box-shadow and background
                />
              </FormControl>
              <FormMessage className="text-xs font-normal text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className=" text-lg font-medium">Email:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  {...field}
                  className=" border-0 border-b border-b-darkCardBorder bg-transparent px-0 placeholder:text-basicMediumGray "
                  style={{ boxShadow: "none", background: "transparent" }}
                  // Add this line to remove box-shadow and background
                />
              </FormControl>
              <FormMessage className="text-xs font-normal text-red-500" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="primaryBtnLight rounded-full p-8 text-lg transition duration-300 hover:bg-basicOnyx/10 hover:text-basicDarkGray hover:shadow-lg"
        >
          Submit your response :)
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
