import Layout from "@/components/layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div>
        <Image
          src="/bw.jpeg"
          alt="Image of Nikki"
          width={400}
          height={400}
        ></Image>
        <div>
          <p>
            Hello, I'm Nikki! Welcome to my in progress website. Very much in
            progress.
          </p>
          <p style={{ color: "red" }}>Please go away if you aren't me.</p>
        </div>
      </div>

      <div>
        <h2>About Me</h2>

        <ul>
          <li>
            Currently, I build internal tools for Games User Research at
            Playstation. I'm an all purpose tech specialist, which has lately
            meant developing an internal website for managing surveys and
            playtest data.
          </li>

          <hr></hr>
          <li>
            Before that, I was a Machine Learning Engineer at Headspace. I
            started out building models for clinical applications, and later
            moved into the ML platform team where I was managing infrastructure
            and workflows for model deployment.
          </li>

          <hr></hr>

          <li>
            Previously, I was a Graduate Student Researcher in ML for
            pharmacogenmics at the Helix Group at Stanford. We collaborated with
            an in vivo research lab and Merck to identify genes and pathways
            related to Nonalcoholic Steatohepatitis. I worked half time from
            June 2020-June 2021 while completing my Masters in Biomedical
            Informatics."
          </li>

          <hr></hr>

          <li>
            Before that, I was an undergrad researcher in a number of labs,
            which served as a great way to explore different areas of science
            and health to find my interests. This included the Mental Health
            Informatics Lab and Department of Health Policy and Research at
            Weill Cornell Medical College, and the Human Performance Lab, the
            Center for Neuroscience and Pain Lab, and the Systems Neuroscience
            and Pain Lab.
          </li>

          <hr></hr>

          <li>
            I graduated from good old Stanny in 2020. During a worldwide
            pandemic!
          </li>

          <hr></hr>

          <li>
            I enjoy too many physically active hobbies (climbing, surfing,
            gymnastics, running). I'm trying to become a better home hobbyer
            (aka playing video games).
          </li>

          <hr></hr>

          <li>
            I love volunteering and practicing my emotional support skills! Over
            the years, this has looked like being a mental health peer
            counselor, a sexual health peer counselor, co-founding a peer
            support group for college students, volunteering at a women's
            shelter, and running the comfort cart for inpatient hospital units.
            It's always a gift to be able to devote time to being completely
            present with other people.
          </li>
        </ul>
      </div>
    </Layout>
  );
}
