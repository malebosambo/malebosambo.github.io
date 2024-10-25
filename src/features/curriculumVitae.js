import React from 'react'; 
import '../styles/curriculumVitae.css';

export default function CurriculumVitae() {
  return (
    <>
      <main className="CV">

        <div className="CV_Contacts">
          <div className="CV_Overview">
            <div className="Avatar text-center">
              <img src="./Malebo-Sambo.png" alt="Avatar" className="img-fluid" style={{ borderRadius: 50 }} />
            </div>
            <div className="Profile">
              <br />
              <h1>Malebo Sambo</h1><br />
              <h4>Founder, CEO, CTO, Business Analyst</h4><br />
              <img src="Email.png" alt="Email Icon" className="Icon" />
              <a href="mailto:sambo.malebo96@gmail.com"><p>sambo.malebo96@gmail.com</p></a><br />
              <img src="./Telephone.png" alt="Telephone Icon" className="Icon" />
              <a href="tel:+27630013711"><p>+27630013711</p></a><br />
              <img src="./Location.png" alt="Location Icon" className="Icon" />
              <p>South Africa</p><br />
            </div>
            <div className="Online">
              <a href="www.linkedin.com/malebosambo"><img src="./Linkedin.png" alt="LinkedIn Icon" className="Icon" /></a>
              <a href="www.github.com/sambomalebo"><img src="./GitHub.png" alt="GitHub Icon" className="Icon" /></a>
              <a href="www.twitter.com/lovais000"><img src="./Twitter.png" alt="Twitter Icon" className="Icon" /></a>
            </div>  
          </div>
          <div className="CV_Email">
            <div style={{ display: "flex", flexDisplay: "row", backgroundColor: "grey" }}><img src="Email.png" alt="Email Icon" className="Icon" /><h4 style={{ marginLeft: 10, padding: 10 }}>Email</h4></div>
            <div style={{ backgroundColor: "sandybrown" }}><a href="mailto:sambo.malebo96@gmail.com"><p>sambo.malebo96@gmail.com</p></a></div>
          </div>
          <div className="CV_Phone">
            <div style={{ display: "flex", flexDisplay: "row" }}><img src="Telephone.png" alt="Telephone Icon" className="Icon" /><h4 style={{ marginLeft: 10, padding: 10 }}>Phone Number</h4></div>
            <div><a href="tel:+27630013711"><p>+27 63 001 3711</p></a></div>
          </div>
          <div className="CV_Socials">
            <a href="www.linkedin.com/malebosambo"><img src="./Linkedin.png" alt="LinkedIn" className="Icon" /></a>
            <a href="www.github.com/sambomalebo"><img src="./GitHub.png" alt="GitHub" className="Icon" /></a>
            <a href="www.twitter.com/lovais000"><img src="./Twitter.png" alt="Twitter" className="Icon" /></a>
          </div>
        </div>

        <div className="CV_Body">
          <div className="CV_Section1">
            <div className="CV_About">
              <h2>Personal Summary</h2><br />
              <p>I am an IT professional with experience in both Software and Mobile App Development, Quality Assuarance (QA), Research & Development (R&D) Analysis, and Business Analysis (BA). </p><br />
              <p>I have skills and experience as a Operations Manager for SMMEs in the IT sector, I also provide organizational culture and business model development expertise.</p><br />
              <p>I possess great personal characteristics that assist me to work with diverse and incredible private and public sector individuals to deliver projects and initiatives.</p>
            </div>

            <div className="CV_Education">
              <h2>Education Background</h2><br />
              <div>
                <p>2010-2014</p>
                <p>National Senior Certificate</p>
                <p>Frans du Toit High School</p>
              </div>
              <div>
                <p>2022</p>
                <p>OutSystems Reactive Developer</p>
                <p>OutSystems</p>
              </div>
            </div>

            <div className="CV_Softskills">
              <h2>Soft Skills</h2><br />
              <ul>
                <li><p>Communication (Verbal/Written)</p></li>
                <li><p>Collaborator</p></li>
              </ul>
            </div> 
          </div>

          <div className="CV_Section2">
            <div className="CV_Avatar">
              <img src="./Malebo-Sambo.png" alt="Avatar" />
              <h1>Malebo Sambo</h1>
              <h3>Software Developer/Engineer</h3>
            </div>
            <div className="CV_Hardskills">
              <h2>Hard Skills</h2><br />
              <ul>
                <li><p>OutSystems Reactive Developer</p></li>
                <li><p>MERN/Next.js Developer</p></li>
                <li><p>C# Developer (Blazor)</p></li>
                <li><p>WordPress Developer</p></li>
                <li><p>Flutter Mobile App Developer</p></li>
              </ul>
            </div>
          </div>

          <div className="CV_Section3">
            <div className="CV_Employment">
              <h2>Employment Experience</h2><br />
              <div>
                <p>2021-2022</p>
                <p>Social Impact Platform Specialist</p>
                <p>ExoFutures</p>
              </div>
              <hr />
              <div>
                <p>2020-2021</p>
                <p>Tester/Business Analyst/Mobile Developer</p>
                <p>ExoSystems</p>
              </div>
              <hr />
              <div>
                <p>2019-2020</p>
                <p>OutSystems Platform Internship Trainee</p>
                <p>ExoSystems</p>
              </div>
              <hr />
              <div>
                <p>2018</p>
                <p>Operations Manager</p>
                <p>Tree Tech Academy</p>
              </div>
              <hr />
              <div>
                <p>2017-2018</p>
                <p>Dispatch Assistant</p>
                <p>CTM Montague Gardens</p>
              </div>
              <hr />
              <div>
                <p>2016-2017</p>
                <p>Operations Manager</p>
                <p>Tree Tech Academy</p>
              </div>              
            </div>
            <div className="CV-Achievements">
              <h2>Achievements</h2><br />
              <div>
                <p>2016</p>
                <p>2nd Place Winners</p>
                <p>Pitch and Poster Competition</p>
              </div>              
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
