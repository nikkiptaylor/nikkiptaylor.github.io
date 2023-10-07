import Layout from '../components/layout'
import styles from '../styles/resume.module.css'


export default function Resume() {
  return (
    <Layout>   
        <p><a href="./nikki_resume_09_11_2023_eng.pdf" className={styles.resume} >Download resume here!</a></p> 
        <p><h1> Tldr;</h1>

        <ul>
            <li>Currently, Machine Learning Engineer at Headspace (since November 2021). Started out building models for clinical applications, then focused on ML Platform and Ops.</li>
            <li>Previously, Graduate Student Researcher in ML for pharmacogenmics. Collab with in vivo research lab and Merck to identify genes and pathways related to Nonalcoholic Steatohepatitis. Worked half time from June 2020-June 2021 while doing my Master's in Biomedical Informatics.</li>
            <li>Previously previous, undergrad researcher in a number of labs - served as a great way to explore different areas of science and health to find my interests. Including - Mental health informatics lab and department of health policy and research at weill cornell, human performance lab, center for neuroscience and pain lab, systems neuroscience and pain lab.   </li>
            <li>Graduated from Stanny in 2020</li>
            <li>Enjoys too many physically active hobbies (climbing, surfing, gymnastics, running). Trying to become a better home hobbyer. Loves gaming.</li>
            <li>Loves volunteering and working with people</li>
        </ul>
        <p>Fooled you into thinking this would be shorter than my resume, didn't I? Congrats if you made it this far. Here's a custom gif, just for you.</p>
        <p> insert surf gif</p>
        </p>
            

       
    </Layout>
       
  )
}