import Welcome from "./page"
import Footer from "./components/navigation/footer"

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <html>
            <body>
              <Welcome/>

              <Footer/>
            </body>
        </html>
    </main>
  );
}