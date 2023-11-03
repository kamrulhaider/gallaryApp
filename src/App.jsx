import "./App.css";
import { gallaryImg } from "./assets/imageArray";

function App() {
  const imgGallary = gallaryImg;
  console.log(imgGallary);

  return (
    <div>
      {imgGallary?.map((item, i) => (
        <img className="h-4" key={i} src={item.img} alt="" />
      ))}
    </div>
  );
}

export default App;
