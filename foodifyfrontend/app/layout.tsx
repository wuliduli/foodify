import Welcome from "./page"
import "./globals.css"
import Footer from "./components/navigation/footer"
import Header from "./components/navigation/header"

export default function Home() {
  return (
    <main style={{fontFamily: 'sans-serif' }}>
        <html>
            <body>
              <Header/>
              <Welcome/>
              

              <Footer/>
            </body>
        </html>
    </main>
  );
}