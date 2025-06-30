import "./globals.css"
import Footer from "./components/navigation/footer"
import Header from "./components/navigation/header"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body style={{ fontFamily: 'sans-serif' }}>
        <Header />
        <div className="padding-top-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}