import { Phone, Mail, Facebook } from "lucide-react";
import LogoWord from "../atoms/LogoWord.jsx";
import ListItem from "../atoms/ListItem.jsx";
import { WhatsAppIcon, TiktokIcon } from "../../utils/constants.js";
import SecHeading from "../atoms/SecHeading.jsx";

function Contact() {
  return (
    <div className={`p-6 px-8 mt-14`}>
      {/*  Section heading*/}
      <SecHeading>تواصل معنا</SecHeading>

      <div className="border border-accent-dark-2/50 rounded-xl p-5 px-4 sm:px-8 bg-accent-main/10 flex flex-col gap-6">
        {/* Section title */}
        <LogoWord>معلومات التواصل</LogoWord>

        {/* Description */}
        <p className="font-normal text-lg">
          يمكنك أيضًا التواصل معنا مباشرة عبر الوسائل التالية. نسعد بخدمتك في أي
          وقت.
        </p>

        {/* Contact info */}
        <ul className="p-5 py-3 flex flex-col gap-5">
          <ListItem headTitle="واتساب" bodyTitle="+201116678912">
            <Phone size={28} />
          </ListItem>

          <ListItem
            headTitle="البريد الإلكتروني"
            bodyTitle="someone@example.com"
          >
            <Mail size={28} />
          </ListItem>
        </ul>

        {/* Divider */}
        <div className="w-5/6 h-[2px] bg-accent-dark-2/10 rounded-xl mx-auto" />

        {/* Social links */}
        <div className="vertical-icons px-5 flex flex-col gap-6">
          <LogoWord>تابعنا على</LogoWord>

          <div className="flex justify-start gap-6 flex-wrap">
            <ListItem type="vertical" headTitle="WhatsApp">
              <a href="#" aria-label="WhatsApp">
                <img
                  src={WhatsAppIcon}
                  width={28}
                  height={28}
                  alt="WhatsApp icon"
                  className="hover:scale-105 transition-all duration-300"
                />
              </a>
            </ListItem>

            <ListItem type="vertical" headTitle="TikTok">
              <a href="#" aria-label="TikTok">
                <img
                  src={TiktokIcon}
                  width={28}
                  height={28}
                  alt="TikTok icon"
                  className="hover:scale-105 transition-all duration-300"
                />
              </a>
            </ListItem>

            <ListItem type="vertical" headTitle="Facebook">
              <a href="#" aria-label="Facebook">
                <Facebook
                  size={30}
                  className={`hover:scale-105 transition-all duration-300 text-accent-dark`}
                />
              </a>
            </ListItem>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
