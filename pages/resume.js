import Head from "next/head";

export default function ResumePage() {
    return (
      <>
      <Head>
        <title>Sebastian H | Resume</title>
      </Head>
        <div class="resume-html">
          <div class="mainDetails">
            
            <div id="name">
              <h1 class="quickFade delayTwo">Sebastian Heckmann</h1>
              <h2 class="quickFade delayThree">Principal Application Developer</h2>
            </div>
            
            <div id="contactDetails" class="quickFade delayFour">
              <ul>
                <li>e: <a href="mailto:joe@bloggs.com" target="_blank">joe@bloggs.com</a></li>
                <li>w: <a href="http://www.bloggs.com">www.bloggs.com</a></li>
                <li>m: 01234567890</li>
              </ul>
            </div>
            <div class="clear"></div>
          </div>
          
          <div id="mainArea" class="quickFade delayFive">
            <section>
              <article>
                <div class="sectionTitle">
                  <h1>Personal Profile</h1>
                </div>
                
                <div class="sectionContent">
                  <p>Software Engineer with 10 years of experience developing and maintaining and deploying large scale enterprise applications.</p>
                </div>
              </article>
              <div class="clear"></div>
            </section>
            
            <section>
              <div class="sectionTitle">
                <h1>Work Experience</h1>
              </div>
              
              <div class="sectionContent">
                <article>
                  <h2>Job Title at Company</h2>
                  <p class="subDetails">April 2011 - Present</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. 
                    Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                </article>
              </div>
              <div class="clear"></div>
            </section>
            
            
            <section>
              <div class="sectionTitle">
                <h1>Key Skills</h1>
              </div>
              
              <div class="sectionContent">
                <div>Backend</div>
                <ul class="keySkills">
                  <li>Python</li>
                  <li>Java EE</li>
                  <li>C#</li>
                  <li>SQL</li>
                </ul>
                <div>Frontend</div>
                <ul class="keySkills">
                  <li>Javascript</li>
                  <li>Typescript</li>
                  <li>Html/CSS</li>
                </ul>
                <div>Frameworks</div>
                <ul class="keySkills">
                  <li>Django</li>
                  <li>ASP.NET</li>
                  <li>Node.js</li>
                  <li>Next.js</li>
                </ul>
              </div>
              <div class="clear"></div>
            </section>
            
            
            <section>
              <div class="sectionTitle">
                <h1>Education</h1>
              </div>
              
              <div class="sectionContent">
                <article>
                  <h2>College/University</h2>
                  <p class="subDetails">Qualification</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
                </article>
                
                <article>
                  <h2>College/University</h2>
                  <p class="subDetails">Qualification</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
                </article>
              </div>
              <div class="clear"></div>
            </section>
            
          </div>
        </div>
      </>
    );
  }
  
  