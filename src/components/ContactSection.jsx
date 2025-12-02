import { Facebook, Instagram, Linkedin, Mail, Phone, Send } from "lucide-react";
import React, { useState } from "react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";

function ContactSection() {
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      await fetch("https://formsubmit.co/ajax/karim.samer19@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your Message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relatvie bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collabrate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Social Contact */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Infromation</h3>
            <div className="space-y-6 justify-center">
              {/* EMAIL */}
              <div className="flex items-start  space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:karim.samer19@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    karim.samer@gamil.com
                  </a>
                </div>
              </div>
              {/* ===EMAIL=== */}

              {/* PHONE */}
              <div className="flex items-start  space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+201557000920"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    +201557000920
                  </a>
                </div>
              </div>
              {/*==== PHONE ====*/}

              {/* LOCATION */}
              <div className="flex items-start  space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-foreground hover:text-primary transition-colors cursor-pointer">
                    Egypt, Cairo
                  </a>
                </div>
              </div>
              {/*=== LOCATION ===*/}
              <div className="pt-8">
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex space-x-4 justify-center">
                  <a
                    href="https://www.linkedin.com/in/karim-samer/"
                    target="_blank"
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    <Linkedin />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100009049348525"
                    target="_blank"
                    className="hover:text-primary transition-colors"
                  >
                    <Facebook />
                  </a>
                  <a
                    href="https://www.instagram.com/karim__v9/"
                    target="_blank"
                    className="hover:text-primary transition-colors"
                  >
                    <Instagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* ==== Social Contact ==== */}
          {/* Form Seciton */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> send Message</h3>

            <form className="space-y-6" onSubmit={handleEmail}>
              {/* Name */}
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 "
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Karim Samer...."
                />
              </div>

              {/* Email */}
              <div className="">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 "
                >
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="karim.samer@gmail.com...."
                />
              </div>
              {/* Text Erea */}
              <div className="">
                <label
                  htmlFor="msg"
                  className="block text-sm font-medium mb-2 "
                >
                  Your Message
                </label>
                <textarea
                  id="msg"
                  name="message"
                  required
                  className=" overflow-none w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd Like to talk about..."
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer",
                  ""
                )}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
          {/* === Form Section */}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
