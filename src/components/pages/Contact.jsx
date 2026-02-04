import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Send,
  AtSign,
  MessageCircle,
  Music2,
} from "lucide-react";
import LogoWord from "../atoms/LogoWord.jsx";
import SecHeading from "../atoms/SecHeading.jsx";

function Contact() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram size={28} className="text-pink-600" />,
      color: "hover:bg-pink-50",
      link: "https://www.instagram.com/ashiaa__store?igsh=MWp6dXA4cTQ3ZGcyag%3D%3D&utm_source=qr",
    },
    {
      name: "Threads",
      icon: <AtSign size={28} className="text-black" />,
      color: "hover:bg-gray-100",
      link: "https://www.threads.com/@ashiaa__store?igshid=NTc4MTIwNjQ2YQ==",
    },
    {
      name: "Telegram",
      icon: <Send size={28} className="text-blue-500" />,
      color: "hover:bg-blue-50",
      link: "https://t.me/matjar_ashiaa_store?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnrMVQSxoqjkAE4quyb9gsFq3Sp0Iu6pJv2TI6m39ileZo8MPV6Gm-Y9FhGg4_aem_AJVZF-APuKsP6yxFyx3pvA",
    },
  ];

  return (
    <section
      className="min-h-screen bg-main-bg py-20 px-6 sm:px-12 mt-10"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SecHeading>تواصل معنا</SecHeading>
          <p className="text-accent-dark-2/80 text-lg mt-4 ">
            نحن هنا لنجعل تجربتك مع "أشياء" أكثر جمالاً
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 bg-white border border-accent-main/20 rounded-[2.5rem] p-8 shadow-sm"
          >
            <div className="mb-10">
              <LogoWord>معلومات التواصل</LogoWord>
              <p className="text-gray-500 mt-2">
                يسعدنا استقبال رسائلكم واستفساراتكم في أي وقت.
              </p>
            </div>

            <div className=" ">
              <div className="flex items-center gap-5 p-4 rounded-2xl bg-accent-dark/5 border border-transparent hover:border-accent-dark/20 transition-all group">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  <Phone size={24} className="text-accent-dark" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                    واتساب
                  </h4>
                  <p
                    className="text-lg font-medium text-dark-metallic"
                    dir="ltr"
                  >
                    011 2273 2600
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-accent-main/5 border border-accent-main/10 rounded-[2.5rem] p-8"
          >
            <div className="mb-8 ">
              <LogoWord>تابعنا على</LogoWord>
              <p className="text-gray-500 mt-2">
                انضم لمجتمعنا وكن أول من يعرف عن جديدنا.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className={`flex flex-col items-center justify-center p-6 bg-white rounded-3xl shadow-sm transition-colors ${social.color} border border-transparent hover:border-accent-main/30`}
                >
                  <div className="mb-3">{social.icon}</div>
                  <span className="text-sm font-bold text-dark-metallic">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center opacity-40 select-none"
        >
          <p className="font-reqaa text-3xl text-accent-dark-2">
            <span className="underline underline-offset-4">أشياء</span> تُجمّل
            تفاصيل يومك
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
