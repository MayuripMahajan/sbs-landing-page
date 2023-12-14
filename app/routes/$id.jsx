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
                                    <span style={{ float: "right" }}><a href={`tel:${websiteData?.phone1}`}>
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
                                <li className="nav-item " style={{ paddingTop: '20px' }}>
                                    <a className="gs-nav-btn" style={{ color: "white !important" }} href={`tel:${websiteData?.phone1}`}>Call Now</a>
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
                            <a className="gs-btn shadow" href={`tel:${websiteData?.phone1}`}>Contact Us</a>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            {/* <form className="gs-form shadow">
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
                            </form> */}
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
                            <a className="gs-btn shadow" href={`tel:${websiteData?.phone1}`}>Contact Us</a>
                        </div>

                        <div className="col-xl-4 col-lg-4 text-center">
                            <img src={`${imgServer}/imgs/${websiteData?.aboutIMG}`} className="img-fluid" />
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
                                        <a href={`tel:${websiteData?.phone1}`} className="btn gs-btn" data-toggle="modal" data-target="#exampleModal">Contact Us</a>
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
                            <h1>{websiteData?.companyName}</h1>
                        </div>
                        <div className="col-xl-3 col-lg-3">
                            <a href={`tel:${websiteData?.phone1}`} className="btn gs-btn gs-btn-lg" style={{ backgroundColor: 'grey' }}>Contact Us</a>
                        </div>
                    </div>
                </div>
            </section>



            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3">
                            {
                                websiteData?.logo ?
                                    <img src={`${imgServer}/imgs/${websiteData?.logo}`} className="img-fluid pb-2" />
                                    : websiteData?.companyName
                            }
                            {/* <img src="https://www.shieldpestsolutions.com/images/logo.png" className="img-fluid pb-2" /> */}
                            <p> {websiteData?.shortDescription}   </p>
                        </div>
                        <div className="col-xl-3 col-lg-3 gs-pvt-left">
                            <h4>Services</h4>


                            <ul>
                                {
                                    websiteData?.servicesList.map((service) => {
                                        return <li> <a href="#"> {service?.title}</a></li>

                                    })}
                            </ul>
                        </div>
                        <div className="col-xl-3 col-lg-3">
                            <h4>&nbsp;</h4>


                            <ul>
                                {
                                    websiteData?.servicesList.map((service) => {
                                        return <li> <a href="#"> {service?.title}</a></li>

                                    })}
                            </ul>
                        </div>

                        <div className="col-xl-3 col-lg-3">
                            <h4> Contact Us</h4>

                            <p>Address: {websiteData?.address}
                            </p>
                            <p> phone {websiteData?.phone1} / <br /> {websiteData?.phone1}</p>

                        </div>

                        <div className="col-xl-12 col-lg-12">
                            <hr />
                            <div className="copy-text">
                                <p> Copyright © 2023 <a href="" target="_blank">SBS Solution</a>. All Rights Reserved.

                                    <br />
                                    Website designed and developed by <a href="" target="blank">SBS Solution </a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* <a href={`tel:${websiteData?.phone1}`}>
                <section className="gs-floating-btn">
                    <img src="img/phone-call-white.png" className="img-fluid" />
                </section>
            </a> */}


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