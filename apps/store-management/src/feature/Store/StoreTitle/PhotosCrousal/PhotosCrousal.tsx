import img1 from "../../../../assets/pexels-jonathan-borba-2983101.jpg";
import img2 from "../../../../assets/pexels-photo-3434523.jpeg";
import img3 from "../../../../assets/pexels-valeria-boltneva-1833349.jpg";

const PhotosCrousal = () => {
  return (
    <div id="photos-crousal" className="max-h-96 object-contain flex flex-row">
      <div className="border-red-300 w-3/5 max-h-inherit overflow-hidden">
        <img src={img1} alt="Image 1" className="w-full h-full object-cover" />
      </div>
      <div className="max-h-full flex w-5/12 flex-col overflow-hidden">
        <div className="max-h-50p">
          <img src={img2} alt="Image 2" className="w-full object-cover" />
        </div>
        <div className="max-h-50p">
          <img
            src={img3}
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotosCrousal;
