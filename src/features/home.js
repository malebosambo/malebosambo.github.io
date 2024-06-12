import React from 'react';
import '../styles/home.css';
import ContentItem from './contentItem';
import RepoTable from './repoTable';

export default function Home() {

  const services = [
    {
      id: 1,
      name: "Web Apps",
      ops: ["Static", "Dynamic", "SPA", "PWA"],
      imgUrl: "./Web-App.jpg",
      url: "/web-apps"
    },
    {
      id: 2,
      name: "Mobile Apps",
      ops: ["Android", "iOS", "App Gallery"],
      imgUrl: "./Mobile-App.png",
      url: "/mobile-apps"
    }
  ];

  return (
    <div className="Container">

      <div className="Overview">
        <div className="Avatar">
          <img src="./CVAvatar.jpg" alt="avatar" className="img-circle" />
        </div>
        <div className="Profile">
          <h1>Malebo Sambo</h1><br />
          <h3>Software Developer/Engineer, Entrepreneur, Business Analyst</h3><br />
          <h5>Email: sambo.malebo96@gmail.com</h5><br />
          <h5>Cell: +27630013711</h5><br />
          <h5>Location: JHB/CPT/Remote</h5>
        </div>
        <div className="Online">
          <a href="www.malebosambo.github.app"><img src="" alt="portfolio" /></a>
          <a href="www.linkedin.com/malebosambo"><img src="" alt="LinkedIn" /></a>
          <a href="www.github.com/sambomalebo"><img src="" alt="GitHub" /></a>
          <a href="www.twitter.com/lovais000"><img src="" alt="Twitter" /></a>
        </div>
      </div>
 
      <div className="Content">
      <div style={{paddingBottom: "30px", textAlign: "center"}}><h1>Services</h1></div>
        <div className="container">
          <div className="row">
            {services.map((service) => <ContentItem key={service.id} image={service.imgUrl} name={service.name} list={service.ops} link={service.url} />)}
          </div>
        </div>
      </div>  

      <div className="Repo-List">
        <div style={{paddingBottom: "30px", textAlign: "center"}}><h1>Repositories</h1></div>
        <RepoTable />
      </div>
        
    </div>
  )
}