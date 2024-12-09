import { Social } from "./Social";

const Footer = () => {
  return (
    <footer className="bg-tertiary dark:bg-secondary py-8 mb-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          <div className="mb-6 lg:mb-0 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-primary dark:text-white">
              Connect with Me
            </h2>
            <Social
              containerStyles="flex gap-x-6 mt-4 justify-center lg:justify-start"
              iconsStyles="text-primary dark:text-white text-[24px] hover:text-accent dark:hover:text-primary"
            />
          </div>
          <div className="text-muted-foreground text-center lg:text-right mt-4 lg:mt-0">
            <p>Follow Me on social media for the latest updates.</p>
            <p className="mt-2">
              &copy; {new Date().getFullYear()} Husban Ali. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
