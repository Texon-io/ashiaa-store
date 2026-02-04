import { Instagram, Send, AtSign } from "lucide-react";

function FooterSocials() {
  return (
    <div className="socials">
      <h4 className="font-bold mb-8 text-lg mr-2">تابعنا</h4>
      <div className="flex gap-8 text-xl ">
        <a
          target="_blank"
          href={`https://www.instagram.com/ashiaa__store?igsh=MWp6dXA4cTQ3ZGcyag%3D%3D&utm_source=qr`}
          className={`flex `}
          alt={`instagram`}
        >
          <Instagram size={32} className="text-accent-dark-2" />
        </a>
        <a
          target="_blank"
          href={`https://www.threads.com/@ashiaa__store?igshid=NTc4MTIwNjQ2YQ==`}
          className={` flex `}
          alt={`threads`}
        >
          <AtSign size={32} className="text-accent-dark-2" />
        </a>
      </div>
    </div>
  );
}

export default FooterSocials;
