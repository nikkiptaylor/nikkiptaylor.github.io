import Layout from "../components/layout";

export default function YCombinator() {
  return (
    <Layout>
      <div className="mx-auto flex max-w-3xl flex-col gap-10 px-2 leading-relaxed">
        <section className="border-b border-gray-200 pb-8 text-center">
          <h1 className="text-4xl font-bold">Hello Y Combinator, I'm Nikki</h1>
        </section>

        <section className="text-lg">
          <p>
            Thank you for visiting - I apologize that it is not a Claude code
            session. I primarily use my enterprise Codex subscription through
            work and while I have multiple sessions that I would be proud of, I
            can't share those sessions. Rather than creating an artificial demo
            project just for this application, I thought it would be more useful
            to describe a few real ways I’ve been using Codex recently and what
            I’ve learned from it.
          </p>
        </section>

        <section className="space-y-5 rounded border border-gray-200 p-6">
          <h2 className="text-2xl font-bold">
            Creating an AI-facing documentation structure
          </h2>
          <p>
            As AI assisted coding tools have developed, I have tried many
            different tools — I used Cline in VSCode for a while, Claude Code
            via CLI and the VSCode extension, and eventually landed on the Codex
            desktop app due to our billing structure. What I have found
            incredibly useful is developing a structured set of documentation
            alongside my code and having the AI agent continually update that
            documentation. I've optimized the structure to a point where my
            prompts need minimal detail for the agent to find the right examples
            within the code, and I can pick up work from in-progress plans
            seamlessly.
          </p>
          <p>
            I created a general entrypoint document that points to the set of
            documents any AI agent should read first, including rules for
            updating documentation, language-specific coding standards, key
            files that represent good examples of desired codebase patterns,
            templates for different tasks (analysis, bugfix, tech spec, part of
            a plan), and "domain"-specific directories representing different
            features or initiatives in the codebase. Each domain directory has
            its own entrypoint with information about the feature, ongoing work,
            patterns to follow, and the set of plans and tasks related to that
            area.
          </p>
          <p>
            I've found this especially useful because my codebase is in a highly
            transitional state from a legacy PHP application, so there is a mix
            of patterns and a lot of bad examples the agent could otherwise
            replicate. Boilerplate additions like new CRUD REST endpoints now
            require almost no extra instruction to implement patterns that fit
            the codebase correctly. It's also useful because my context remains
            portable rather than tied to any one AI platform, even if Sony's
            contracts with providers change.
          </p>
        </section>

        <section className="space-y-5 rounded border border-gray-200 p-6">
          <h2 className="text-2xl font-bold">
            Developing a Notetaking App Proof of Concept
          </h2>
          <p>
            I used Codex to quickly build a proof of concept within an existing
            tool I own that allows user researchers to create reusable
            note-taking templates for different rounds of research. The goal was
            to address usability issues with scrolling through tools like Word
            and Excel while also automating the processing of notes into a
            structured format shared across sessions, supporting tagging and
            @mentioning participants, integrating interview transcription, and
            using AI endpoints to align transcripts with note sections and
            generate summaries for sessions, participants, and topics based on
            both transcripts and notes.
          </p>
          <p>
            I started with a rough specification of the high-level user and
            technical needs, generated a basic HTML prototype to gather UI
            feedback, and then used the existing AI-facing documentation
            structure to help generate a more detailed spec from the
            requirements and UI example. I was able to get a fully featured app
            in front of a user researcher during a real playtest, which was
            immensely valuable because I could observe her using it in real time
            and get feedback before building the production version.
          </p>
          <p>
            This one was especially fun because I let loose a bit with subagents
            and gave the frontend implementation less supervision than I
            normally would for AI assisted development since it was
            intentionally a fast proof of concept.
          </p>
        </section>

        <section className="space-y-5 rounded border border-gray-200 p-6">
          <h2 className="text-2xl font-bold">
            Automating PlayStation lab teardown
          </h2>
          <p>
            Our research team has to perform a lot of manual steps to tear down
            the lab after studies. I first used Codex to create a PowerShell
            script using the PS5 developer CLI to automate these steps in
            parallel, then decided to make it more usable for researchers by
            building a Python-based Qt app packaged as an executable.
          </p>
          <p>
            It was extremely quick to develop, immediately saved researchers
            over an hour per study, and it is pretty cool to watch a symphony of
            PS5s operating autonomously and turning on and off in parallel.
          </p>
        </section>
      </div>
    </Layout>
  );
}
