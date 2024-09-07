import Header from "./components/Header";
import MainContent from "./components/MainContent";
import MyFooter from "./components/Footer";
export default function Home() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#" },
    { name: "Contact Us", href: "/#" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com" },
    { name: "Github", href: "https://github.com" },
    { name: "Twitter", href: "https://twitter.com" },
  ];

  return (
    <main className="bg-gray-800">
      <Header />
      <MainContent />
      <MyFooter navLinks={navLinks} socialLinks={socialLinks} />
    </main>
  );
}
