 import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useSettings } from "../context/SettingsContext";

export default function ContactUs() {

  const { settings } = useSettings();

  const CONTACT_EMAIL = settings?.email || "team9byt@gmail.com";
  const CONTACT_PHONE = settings?.phone || "+91 00000 00000";
  const CONTACT_ADDRESS = settings?.address || "India";

  const MAP_LINK =
    settings?.mapLink ||
    `https://maps.google.com/?q=${encodeURIComponent(CONTACT_ADDRESS)}`;

  const phoneHref = `tel:${CONTACT_PHONE.replace(/[^0-9+]/g, "")}`;


  /* FORM LOGIC UNCHANGED */

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captcha, setCaptcha] = useState("");
  const [captchaValid, setCaptchaValid] = useState(false);


  useEffect(() => regenerateCaptcha(), []);

  const regenerateCaptcha = () => {

    setNum1(Math.floor(Math.random() * 9) + 1);
    setNum2(Math.floor(Math.random() * 9) + 1);
    setCaptcha("");
    setCaptchaValid(false);

  };

  useEffect(() => {
    setCaptchaValid(Number(captcha) === num1 + num2);
  }, [captcha, num1, num2]);


  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }


  async function handleSubmit(e) {

    e.preventDefault();

    if (!captchaValid || loading) return;

    setLoading(true);
    setError("");
    setSuccess(false);

    const API_BASE =
      import.meta.env.VITE_API_URL ||
      "https://ninebyt.onrender.com";

    try {

      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setSuccess(true);

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      regenerateCaptcha();

    } catch {

      setError("Failed to send message.");

    } finally {

      setLoading(false);

    }

  }


  /* UI */

  return (

    <main className="relative bg-black text-white py-32 overflow-hidden font-[Poppins]">


      {/* MULTI LAYER GLOW */}

      <div className="absolute w-[700px] h-[700px] bg-blue-600/10 blur-[200px] rounded-full top-[-200px] left-[-200px]" />

      <div className="absolute w-[500px] h-[500px] bg-blue-400/10 blur-[180px] rounded-full bottom-[-200px] right-[-200px]" />



      <div className="relative max-w-7xl mx-auto px-6">


        {/* HERO */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >

          <p className="text-blue-500 font-semibold tracking-widest mb-4">

            CONTACT NINEBYT

          </p>


          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">

            Let's create something

            <span className="text-blue-500 block">

              exceptional together

            </span>

          </h1>


          <p className="text-gray-400 text-lg max-w-xl mx-auto">

            Tell us about your project. We’ll help you build it.

          </p>


        </motion.div>



        <div className="grid lg:grid-cols-3 gap-10">


          {/* INFO */}

          <div className="space-y-6">


            {[
              { icon: Mail, label: "Email", value: CONTACT_EMAIL, link: `mailto:${CONTACT_EMAIL}` },
              // { icon: Phone, label: "Phone", value: CONTACT_PHONE, link: phoneHref },
              { icon: MapPin, label: "Location", value: CONTACT_ADDRESS, link: MAP_LINK },
            ].map((item, i) => {

              const Icon = item.icon;

              return (

                <div key={i}
                  className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-blue-500 hover:bg-white/10 transition"
                >

                  <Icon className="text-blue-500 mb-3" />

                  <p className="text-gray-400 text-sm">
                    {item.label}
                  </p>

                  <p className="font-medium">
                    {item.value}
                  </p>

                </div>

              );

            })}


          </div>



          {/* FORM */}

          <div className="lg:col-span-2">


            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10">


              {success && (

                <div className="bg-green-500/10 text-green-400 p-4 mb-6 rounded-lg flex gap-2">

                  <CheckCircle size={18} />

                  Message sent successfully

                </div>

              )}


              {error && (

                <div className="bg-red-500/10 text-red-400 p-4 mb-6 rounded-lg">

                  {error}

                </div>

              )}



              <form onSubmit={handleSubmit} className="space-y-5">


                <div className="grid md:grid-cols-2 gap-4">

                  <input name="firstName" placeholder="First Name" required value={form.firstName} onChange={handleChange} className="input"/>

                  <input name="lastName" placeholder="Last Name" required value={form.lastName} onChange={handleChange} className="input"/>

                </div>


                <input name="email" placeholder="Email Address" required value={form.email} onChange={handleChange} className="input"/>

                <input name="phone" placeholder="Phone Number" required value={form.phone} onChange={handleChange} className="input"/>


                <textarea name="message" placeholder="Tell us about your project" required value={form.message} onChange={handleChange} className="input h-32"/>



                {/* CAPTCHA */}

                <div className="bg-white/5 border border-white/10 p-4 rounded-xl">

                  <p className="text-sm text-gray-400 mb-2">

                    Security Check: {num1} + {num2}

                  </p>

                  <input value={captcha} onChange={(e)=>setCaptcha(e.target.value)} className="input"/>

                </div>



                {/* BUTTON */}

                <button

                  disabled={!captchaValid || loading}

                  className="w-full bg-blue-600 py-4 rounded-xl font-semibold hover:bg-blue-700 hover:scale-[1.02] transition"

                >

                  {loading ? "Sending..." : "Send Message"}

                </button>


              </form>


            </div>


          </div>


        </div>


      </div>



      {/* INPUT */}

      <style>{`

      .input {

        width:100%;
        background:rgba(255,255,255,0.05);
        border:1px solid rgba(255,255,255,0.1);
        padding:14px;
        border-radius:10px;
        color:white;

      }

      .input:focus {

        outline:none;
        border-color:#2563eb;

      }

      `}</style>


    </main>

  );

}
