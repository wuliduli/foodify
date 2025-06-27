import Welcome from "./page"
import "./globals.css"
import Footer from "./components/navigation/footer"

export default function Home() {
  return (
    <main style={{fontFamily: 'sans-serif' }}>
        <html>
            <body>
              <Welcome/>

              <Footer/>
            </body>
        </html>
    </main>
  );
}