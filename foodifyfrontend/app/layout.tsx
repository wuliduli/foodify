import "./globals.css"
import Footer from "./components/navigation/footer"
import Header from "./components/navigation/header"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="min-h-screen flex flex-col" style={{ fontFamily: 'sans-serif' }}>
        <Header />
        <main className="flex-1">
        <div className="padding-top-20">
          {children}
        </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}