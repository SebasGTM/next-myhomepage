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
              </ul>
            </div>
            <div class="clear"></div>
          </div>
          
          <div id="mainArea" class="quickFade delayFive">
            <section>
              <article>
                <div class="sectionTitle">
                </div>
                
                <div class="sectionContent">
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
            </section>
            
          </div>
        </div>
      </>
    );
  }
  
  