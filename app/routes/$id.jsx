import { useLoaderData } from "@remix-run/react";
import styles from "../css/style.css"
import style from "../css/bootstrap.css"
import { useEffect, useState } from "react";
import { postAPI } from "../utils/api"
import { domain, imgServer } from "../utils/domain"

const landingPage = () => {

    const [websiteData, setWebsiteData] = useState()
    const loaderData = useLoaderData()

    useEffect(() => {
        console.log(loaderData)
        setWebsiteData(loaderData?.website[0])
    }, [])

    return <>

        <body>
            <section className="gs-header shadow" id="home">
                <div className="top-header">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p>
                                    <span className="gs-none">Welcome To {websiteData?.companyName}</span>
                                    <span style={{ float: "right" }}><a href={`tel:${websiteData?.phone2}`}>
                                        <i className="fas fa-phone-alt"></i> {websiteData?.phone1}</a>
                                        <a href={`tel:${websiteData?.phone2}`}>
                                            / {websiteData?.phone2}</a></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navbar-light " id="navbar_top">
                    <div className="container">
                        <a className="navbar-brand" style={{ fontWeight: '600' }} >
                            {
                                websiteData?.logo ?
                                    <img src={`${imgServer}/imgs/${websiteData?.logo}`} className="img-fluid" />
                                    : websiteData?.companyName
                            }
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About Us</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#service">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#testimonials">Testimonials</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact Us</a>
                                </li>
                                <li className="nav-item " style={{ paddingTop: '20px' }}>
                                    <a className="gs-nav-btn" style={{ color: "white !important" }} href={websiteData?.phone1}>Call Now</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>


            <section className="gs-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-7">
                            <h1>{websiteData?.companyName}</h1>
                            <p className="pt-2 pb-2">
                                {websiteData?.shortDescription}                            </p>
                            <a className="gs-btn shadow" href={websiteData?.phone1}>Contact Us</a>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <form className="gs-form shadow">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <label> Email</label>
                                    <input type="text" name="name" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" name="name" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <label>City</label>
                                    <input type="text" name="name" className="form-control" placeholder="Your Name" />
                                </div>

                                <input type="submit" className="btn gs-btn" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="gs-about" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8">
                            <h3>About Company</h3>
                            <p> {websiteData?.aboutCompanyDetails}    </p>
                            <a className="gs-btn shadow" href={websiteData?.phone1}>Contact Us</a>
                        </div>

                        <div className="col-xl-4 col-lg-4 text-center">
                            {/* <img src="img/icon1-green.png" className="img-fluid" /> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="gs-services " id="service">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <h1>Our Services
                            </h1>
                            {/* <p>India's best pest control services
                            </p> */}
                        </div>
                        {
                            websiteData?.servicesList.map((service) => {
                                return <div className="col-xl-4 col-lg-4">
                                    <div className="gs-card">
                                        <img src={`${imgServer}/imgs/${service?.img}`} className="img-fluid rounded" />
                                        <h4>{service?.title}</h4>
                                        <p>{service?.description}</p>
                                        <a href="#" className="btn gs-btn" data-toggle="modal" data-target="#exampleModal">Book Now</a>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>
            </section>

            <section className="gs-cta">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-9">
                            <h1>Shield Pest Solutions | 100% Free from Bacteria</h1>
                        </div>
                        <div className="col-xl-3 col-lg-3">
                            <a href="tel:918451047073" className="btn gs-btn gs-btn-lg" style={{ backgroundColor: '#fff', color: 'black !important' }}>Contact Us</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="gs-testimonial" id="testimonials">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 pb-5">
                            <h1>Testimonials</h1>
                            <p>What our client thinks about us.

                            </p>
                        </div>

                        <div className="col-xl-4 col-lg-4 text-center">
                            <div className="gs-box shadow">
                                <img src="img/stars.png" className="img-fluid pb-2" alt="" />
                                <p>Thanks a ton to Shield India for the Pest control Services.. !! <br />

                                    Very good quality of service on time with reasonable rate. The field staff is very polite. Very good
                                    result of Pest control. <br />

                                    I surely recomend the viewers to avail the pest control services from the Shield India</p>

                                <h5>Keyur Parekh</h5>
                                <img src="img/profile.jpg" className="img-fluid gs-profile" />

                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 text-center">
                            <div className="gs-box shadow">
                                <img src="img/stars.png" className="img-fluid pb-2" alt="" />
                                <p>Very professional and excellent services provided by Shield India. <br /> Have been using their pest
                                    control services for past 5+ years. <br /> Great leadership shown by Sunil Kanse ji, Amol Raut and others.
                                    <br /> Keep it up.
                                    <br /> &nbsp;
                                </p>

                                <h5>Nilesh Lele</h5>
                                <img src="img/profile.jpg" className="img-fluid gs-profile" />

                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 text-center">
                            <div className="gs-box shadow">
                                <img src="img/stars.png" className="img-fluid pb-2" alt="" />
                                <p> I had contacted Mr. Sunil for my clinic pest control. <br /> I'm happy with their service for cockroaches
                                    and Bugs control. <br /> I would recommend all to avail his services. <br /> On time and cost effective
                                    service. Keep up the good work.</p>

                                <h5>Keyur Parekh</h5>
                                <img src="img/profile.jpg" className="img-fluid gs-profile" />

                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className="gs-contact " id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-7">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 pb-4">
                                    <h1>Contact Us</h1>
                                </div>

                                <div className="col-xl-6 col-lg-6">
                                    <p><b>Andheri Office (H.O.):</b> <br />
                                        2 Office No.5, Friends Shopping Center, Azad Road, Andheri (East) Mumbai 400 069
                                        <br />
                                        <b> Phone No: 8828131195</b>
                                    </p>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <p><b>Borivali Office:</b> <br />
                                        Shop No.1, Shakti Niwas, Carter Road No.7, Me. Yashwant Shopping Center, Borivali (East) Mumbai 400
                                        066<br />
                                        <b> Phone No: 9987140406</b>
                                    </p>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <p><b>Thane Office:</b> <br />
                                        Office No. 7A/B, Gautam Arcade CHS Opp. Radhakrishna Temple,Tilak Road Kopari, Thane (E) 400603<br />
                                        <b> Phone No: 7738035628</b>
                                    </p>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <p><b>Goa Office:</b> <br />
                                        1502, T-18, GOA HOUSING SOC, MADEL THIVIM, GOA 403502<br />
                                        <b> Phone No: 8451047073</b>
                                    </p>
                                </div>


                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <form className="gs-form shadow">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" name="name" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <label>City</label>
                                    <input type="text" name="name" className="form-control" placeholder="Your Name" />
                                </div>

                                <input type="submit" className="btn gs-btn" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>















            {/* <!-- Modal --> */}
            {/* <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ paddingTop: "100px" }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">

            <form className="gs-form shadow">
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" className="form-control" placeholder="Your Name" />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input type="text" name="name" className="form-control" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label>City</label>
                <input type="text" name="name" className="form-control" placeholder="Your Name" />
              </div>

              <input type="submit" className="btn gs-btn" value="Submit" />
            </form>

          </div>
        </div>
      </div> */}


            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3">
                            <img src="https://www.shieldpestsolutions.com/images/logo.png" className="img-fluid pb-2" />
                            <p>We M/s. Shield India Pest Solutions (OPC) Pvt. Ltd. introduce ourselves as a company comprising of
                                knowledgeable, qualified and experienced people in the field of pest control services in Mumbai & Thane</p>
                        </div>
                        <div className="col-xl-3 col-lg-3 gs-pvt-left">
                            <h4>Services</h4>


                            <ul>
                                <li> <a href="#"> General Pest Control</a></li>
                                <li> <a href="#"> General Pest Control</a></li>
                                <li> <a href="#"> General Pest Control</a></li>
                                <li> <a href="#"> General Pest Control</a></li>
                                <li> <a href="#"> General Pest Control</a></li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-lg-3">
                            <h4>&nbsp;</h4>


                            <ul>
                                <li> <a href="#"> General Pest Control</a></li>
                                <li> <a href="#"> General Pest Control</a></li>
                                <li> <a href="#"> General Pest Control</a></li>
                                <li> <a href="#"> General Pest Control</a></li>
                                <li> <a href="#"> General Pest Control</a></li>
                            </ul>
                        </div>

                        <div className="col-xl-3 col-lg-3">
                            <h4> Contact Us</h4>

                            <p>Address: 2 Office No.5, Friends Shopping Center, Azad Road, Andheri (East) Mumbai 400 069
                            </p>
                            <p> phone +91 84510 47073 / <br /> +91 91677 74333</p>

                        </div>

                        <div className="col-xl-12 col-lg-12">
                            <hr />
                            <div className="copy-text">
                                <p> Copyright © 2022 <a href="https://leadpest.com" target="_blank">LeadPest</a>. All Rights Reserved.

                                    <br />
                                    Website designed and developed by <a href="https://brokod.com" target="blank"> Brokod IT Consultant
                                        Company</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <a href="tel:918451047073">
                <section className="gs-floating-btn">
                    <img src="img/phone-call-white.png" className="img-fluid" />
                </section>
            </a>


        </body>
    </>
}

export const loader = async ({ params }) => {
    // export async function loader({params}) {
    try {
        const id = params.id;
        console.log(id)
        const response = await postAPI(`${domain}/api/landingpage/viewlandingpage`, JSON.stringify({ _id: id }))
        console.log("response0", response)
        return response
    } catch (err) {
        console.log(err);
        return { message: "Something went wrong" };
    }
};


export default landingPage

export const links = () => [
    {
        rel: "stylesheet",
        href: styles
    }, {
        rel: "stylesheet",
        href: style
    }
]