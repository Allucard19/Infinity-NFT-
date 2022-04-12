import Image from "next/image";


export default function Team() {
  return (
    <div className="background-black" style={{ minHeight: "70vh" }}>
      <div className="container">
        <div className="title">
          <br />
          <br />
          <h1 className="title-main text-center">
            <b>Team Infinity</b>
          </h1>
          <br />
          <br />
        </div>

        <div className="row">
          <div className="col-md-4 my-2 text-center">
            <div className="top-image">
              <Image
                width="200px"
                height="200px"
                className="hover-effect-zoom"
                src='/../public/assets/ritik.jpeg'
                alt="Ritik"
                loading="lazy"
              />
            </div>
            <div className="bottom mb-3">
              <h5 className="text-center my-4">
                <b>Ritik</b>
              </h5>
            </div>
          </div>

          

          <div className="col-md-4 my-3 text-center">
            <div className="top-image">
              <Image
                className="hover-effect-zoom"
                height="200px"
                width="200px"
                src='/../public/assets/Subin.jpg'
                alt="Subin"
                loading="lazy"
              />
            </div>
            <div className="bottom mb-3">
              <h5 className="text-center my-4">
                <b>Subin</b>
              </h5>
            </div>
          </div>
        
        
          <div className="col-md-4 my-4 text-center">
            <div className="top-image">
              <Image
                width="200px"
                height="200px"
                className="hover-effect-zoom"
                src='/../public/assets/ashish.jpeg'
                alt="Ashish"
                loading="lazy"
              />
            </div>
            <div className="bottom mb-3">
              <h5 className="text-center my-4">
                <b>Ashish</b>
              </h5>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
}
