import React from 'react'
import Footer from '../components/Footer/Footer'
export default function Stack() {
    return (
        <div className="maindiv">
            <br/><br/>
            <h1 className="headings">STACK</h1>
            <div className="stackbx">
            <p className="stacktxt">I got the idea for this page from Crisd's page. 
                I think it's great to share the tools and workflows we use,
                 and I myself often get asked things like what editor I use, 
                 what's my tech stack for my projects, and what products I use t
                 o give them the best chance of success.</p>
                 <p className="stacktxt">This is of course an ever-changing array of things, 
                     but I'll keep it updated as best I can, and I'm more 
                     than open to suggestions for improvement.</p>
                     <p className="stackheads">Domain names and Hosting</p>
                     <p className="stacktxt"><span className="stacktbs">Netlify</span> for ease of use when deploying fully fledged apps that aren't just static HTML.</p>
                     <p className="stacktxt"><span className="stacktbs">Netlify</span> for domain name, I have selected free domain name. There are some limitations when using free domain name. Also Netlify allow us to use our purchased domain names.</p>
                     <p className="stackheads">Hardware</p>
                     <p className="stacktxt">2020 MacBook Pro 16 Inch.</p>
                     <p className="stackheads">Editor and Terminal</p>
                     <p className="stacktxt">VS code text editor.</p>
                     <p className="stacktxt">Mac OS terminal which is very clean.</p>
                     <p className="stackheads">App Framework</p>
                     <p className="stacktxt">This can obviously differ from project to project, but I usually try to keep it as minimal and simple as I can, without restricting the product's growth. My go-to options for the moment are</p>
                     <p className="stacktxt">Standard HTML and CSS for a quick page that doesn't need to do much </p>
                     <p className="stacktxt"><span className="stacktbs"><a className="stacktbs" href="https://reactjs.org/docs/cdn-links.html">ReactJS</a></span> for both single page apps and static-websites </p>
                     <p className="stacktxt">Express.js with Nodejs server-side for API work.</p>
                     <p className="stacktxt"><span className="stacktbs"><a className="stacktbs" href="https://reactstrap.github.io">Reactstrap</a></span> for adding components.</p>
                     <p className="stackheads">Chrome Extensions</p>
                     <p className="stacktxt"><span className="stacktbs">Custom Chrome</span>.</p>
                     <p className="stackheads">Other</p>
                     <p className="stacktxt"><span className="stacktbs"><a className="stacktbs" href="https://www.figma.com">Figma</a></span> for designing pages.</p>

        </div>
        <Footer/>
        </div>
    )
}
