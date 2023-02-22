import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import image1 from "../images/image1.png";

export default function Banner() {
   return (
      <>
         <div className="mainBackground d-flex flex-column ">
            <div className="min-60vh d-flex flex-column justify-content-center">
               <div className="headlineSection d-flex align-items-center">
                  <MDBContainer>
                     <MDBRow className="d-flex justify-content-center p-0 py-4 m-0">
                        <div>
                           <MDBCol md={6} className="">
                              <div className="d-flex flex-column justify-content-center">
                                 <div className="d-md-flex d-block align-items-baseline m-0 p-0">
                                    <img className="mx-2" src={image1} alt="" />
                                    <h2 className="fw-normal m-0 d-flex ">
                                       <em>The</em>
                                    </h2>
                                 </div>
                                 <h1 className="m-0 bannerHeadline">
                                    <em>Fastest,Most Accurate</em>
                                 </h1>
                                 <h2 className="m-0 fw-normal ">
                                    <em>Way to Close Your Books!</em>
                                 </h2>
                              </div>
                           </MDBCol>
                        </div>
                     </MDBRow>
                  </MDBContainer>
               </div>
            </div>
            <div className="min-40vh d-flex flex-column justify-content-center">
               <div className="">
                  <MDBContainer>
                     <MDBRow className="colorWhite">
                        <MDBCol
                           md={4}
                           className="scheduleDemo d-flex justify-content-center align-items-center flex-column"
                        >
                           <h1 className="text-light">SCHEDULE A DEMO</h1>
                           <h4 className="text-light fw-normal">
                              Learn More About FloQast.
                           </h4>
                        </MDBCol>
                        <MDBCol md={8}>
                           <h1>Hello</h1>
                        </MDBCol>
                     </MDBRow>
                  </MDBContainer>
               </div>
            </div>
         </div>
      </>
   );
}
