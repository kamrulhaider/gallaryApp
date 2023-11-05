import { DndProvider } from "react-dnd";
import "./App.css";
import { gallaryImg } from "./assets/imageArray";
import { images } from "./assets/images/images";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "./components/Container/Container";

function App() {
  const imgGallary = gallaryImg;
  console.log(imgGallary);

  return (
    <div>
      <div className="container mx-auto px-3 my-5">
        {/* <div className="grid lg:grid-cols-5 md:grid-cols-4 gap-4">
          {imgGallary?.map((item, i) => (
            <div
              key={i}
              className={
                item?.type === "featured"
                  ? "row-span-2 col-span-2 cursor-move"
                  : "cursor-move"
              }
            >
              <div className="p-4 border rounded-lg">
                <img className="w-full" src={item?.img} alt="" />
              </div>
            </div>
          ))}
        </div> */}
        <DndProvider backend={HTML5Backend}>
          <Container />
        </DndProvider>
      </div>
    </div>
  );
}

export default App;
