import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Gallery from "./pages/Gallery";

const App = () => {
  // jsx
  // NODE ENDIRIN
  // npm create vite@latest - react proyekti elave edirik
  // npm install - node modulu yuklemek ucundur
  // npm run dev - layiheni qaldirmaq ucundur
  // APP.CSS SILINECEK / APP-IN ICI TEMIZLENECEK
  // ISTIFADE OLUNMAYAN FAYLLAR BOZ RENGDE OLACAG
  // ƏLAVƏ EDİLƏN SƏHİFƏLƏRDƏ rafce yazıb default quruluşu gətirə bilərsiniz
  const deyisken = "Elvin";
  return (
    <>
      <div className="container">
        <Header />
        <h2>REACT App</h2>
        <p>{deyisken}</p>
        <section>
          <About />
          <Gallery />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default App;

// =>
// ARROW FUNCTION
// const App = () => {
//   return(

//   )
// }
