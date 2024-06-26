import Layout from "@/components/layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-y-10">
        <div className="flex justify-center gap-16 flex-col content-center md:flex-row">
          <div className="flex justify-center">
            <Image
              src="/images/bw.jpeg"
              alt="Image of Nikki"
              width={400}
              height={400}
            ></Image>
          </div>

          <div className="flex flex-col justify-center content-center text-center">
            <p className="font-bold">Hello, I'm Nikki!</p>
            <p>Welcome to my in progress website. Very much in progress.</p>
            <p style={{ color: "red" }}>Please go away if you aren't me.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 px-5">
          <h1 className="text-center font-bold text-xl">About Me</h1>

          <div className="p-1">
            Currently, I build internal tools for Games User Research at
            Playstation. I'm an all purpose tech person, which has lately
            involved developing internal web applications for managing surveys,
            playtest data, and video streams.
          </div>

          <hr></hr>
          <div className="p-1">
            Before that, I was a Machine Learning Engineer at Headspace. I
            started out building models for clinical applications, and later
            moved into the ML platform team where I was managing infrastructure
            and workflows for model deployment.
          </div>

          <hr></hr>

          <div className="p-1">
            Previously, I was a Graduate Student Researcher in ML for
            pharmacogenmics at the Helix Group at Stanford. We collaborated with
            an in vivo research lab and Merck to identify genes and pathways
            related to Nonalcoholic Steatohepatitis. I worked half time from
            June 2020-June 2021 while completing my Masters in Biomedical
            Informatics."
          </div>

          <hr></hr>

          <div className="p-1">
            Before that, I was an undergrad researcher in a number of labs,
            which served as a great way to explore different areas of science
            and health to find my interests. This included the Mental Health
            Informatics Lab and Department of Health Policy and Research at
            Weill Cornell Medical College, and the Human Performance Lab, the
            Center for Neuroscience and Pain Lab, and the Systems Neuroscience
            and Pain Lab.
          </div>

          <hr></hr>

          <div className="p-1">
            I graduated from good old Stanny in 2020. During a worldwide
            pandemic!
          </div>

          <hr></hr>

          <div className="p-1">
            I enjoy too many physically active hobbies (climbing, surfing,
            gymnastics, running). I'm trying to become a better home hobbyer
            (aka playing video games).
          </div>

          <hr></hr>

          <div className="p-1">
            I love volunteering and practicing my emotional support skills! Over
            the years, this has looked like being a mental health peer
            counselor, a sexual health peer counselor, co-founding a peer
            support group for college students, volunteering at a women's
            shelter, and running the comfort cart for inpatient hospital units.
            It's always a gift to be able to devote time to being completely
            present with other people.
          </div>
        </div>
      </div>
    </Layout>
  );
}
