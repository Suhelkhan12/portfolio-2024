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
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { sendContactMessage } from "@/app/contact/actions";

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      useremail: "",
      message: "",
    },
  });

  const [status, setStatus] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);

  // Ease the status message in instead of popping it.
  useEffect(() => {
    if (!status || !statusRef.current) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(statusRef.current, {
        y: 8,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    });
    return () => mm.revert();
  }, [status]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setStatus(null);
    try {
      const result = await sendContactMessage(values);
      if (result.ok) {
        form.reset();
        setStatus({
          type: "success",
          text: "Thanks — your message is on its way.",
        });
      } else {
        setStatus({ type: "error", text: result.error });
      }
    } catch {
      setStatus({
        type: "error",
        text: "Couldn't send your message. Please try again.",
      });
    }
  }

  const isSubmitting = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        data-animate="stagger"
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="flex items-center gap-2  border-0 border-b border-b-darkCardBorder pb-2 transition-colors focus-within:border-b-fg/60">
              <FormLabel className=" text-base font-medium">Name:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your name"
                  type="text"
                  {...field}
                  className="!m-0 rounded-none border-none !p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage className="text-xs font-normal text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="useremail"
          render={({ field }) => (
            <FormItem className="flex items-center gap-2 border-0 border-b border-b-darkCardBorder pb-2 transition-colors focus-within:border-b-fg/60">
              <FormLabel className=" text-base font-medium">Email:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  type="email"
                  {...field}
                  className="!m-0 rounded-none border-none !p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage className="text-xs font-normal text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  rows={10}
                  placeholder="Write your message here"
                  {...field}
                  className="resize-none rounded-lg border-0 bg-page p-6 focus-visible:ring-offset-basicOnyx"
                />
              </FormControl>
              <FormMessage className="text-xs font-normal text-red-500" />
            </FormItem>
          )}
        />

        <div className="flex flex-col items-end gap-3">
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="ghost"
            className="primaryBtnLight rounded-full p-8 text-lg text-white transition duration-300 hover:bg-basicOnyx/10 hover:text-white/70 hover:shadow-lg"
          >
            {isSubmitting ? "Sending…" : "Send message"}
          </Button>
          <p
            ref={statusRef}
            role="status"
            aria-live="polite"
            className={`text-sm ${status?.type === "error" ? "text-red-500" : "text-basicLightGray"}`}
          >
            {status?.text}
          </p>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
