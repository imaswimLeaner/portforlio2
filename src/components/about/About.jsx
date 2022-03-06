import "./about.css";
import oscoding from "../../img/os-coding.jpg";
import myImage from "../../img/myImage.jpg";


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={myImage}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
         A Noroff graduate of Front-end Web Developer
        </p>
        <p className="a-desc">
           Hello, I am <strong> Jonathan Convento </strong> and I am a <strong> Front-End web developer</strong>. I live and work in
          somewhere <strong> Bergen</strong>. I spend most of my day, experimenting with HTML, CSS
          and JavaScript (and its endless list of frameworks). I enjoy coding
          and the challenge of learning something new everyday. You can also
          find me at  
          @<a href="https://www.linkedin.com/in/jonathan-convento-686a8270/" className="a-link">LinkedIn</a> and check my project @ <a href="https://github.com/imaswimLeaner" className="a-link">Github </a> 
        </p>
         <br></br>
         <p className="a-desc">For more information visit my <a href="http://jonathanminds.com/resume-cv/index.html" className="a-link"> Resume </a> </p>
        <div className="a-member">
          <img src={oscoding} alt="" className="a-member-img" />
          <div className="a-member-texts">
            <h4 className="a-member-title">Member of Os-coding</h4>
            <p className="a-award-desc">
              We building as a team a website and Learing new Coding languages.
              It is a Social coding here at Bergen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
