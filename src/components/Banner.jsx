import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import image1 from "../images/image1.png";

export default function Banner() {
   return (
      <>
         <div className="mainBackground d-flex flex-column ">
            <div className="min-60vh d-flex flex-column justify-content-center">
               <div className="headlineSection d-flex align-items-center">
                  <MDBContainer>
                     <MDBRow className="d-flex justify-content-center p-0 m-0">
                        <MDBRow>
                           <MDBCol md={6} className="">
                              <div className="d-flex flex-column justify-content-center">
                                 <div className="d-flex align-items-baseline m-0 p-0">
                                    <img className="mx-2" src={image1} alt="" />
                                    <h2 className="fw-normal">
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
                        </MDBRow>
                     </MDBRow>
                  </MDBContainer>
               </div>
            </div>
            <div className="min-40vh d-flex flex-column justify-content-center">
               <div className="">
                  <MDBContainer></MDBContainer>
               </div>
            </div>
         </div>
      </>
   );
}
