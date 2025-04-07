
export default function ResumePage() {
  return `
    <main class="max-w-3xl mx-auto p-6 text-gray-800">
      <header class="text-center mb-10">
        <h1 class="text-4xl font-bold">Ahmad Salama</h1>
        <p class="text-sm text-gray-500">
          <a href="mailto:a.salamainfo@gmail.com" class="underline">a.salamainfo@gmail.com</a> |
          <a href="https://www.linkedin.com/in/jrsalama20/" class="underline" target="_blank">LinkedIn</a> |
          <a href="https://www.behance.net/jrsalama20" class="underline" target="_blank">Behance</a>
        </p>
      </header>
      <section class="mb-8">
        <h2 class="text-2xl font-semibold border-b pb-1 mb-2">Professional Summary</h2>
        <p>
          Creative and detail-oriented multimedia designer and brand strategist with over 6 years of experience
          delivering innovative design solutions. Adept in visual storytelling, branding, digital marketing, and
          UI/UX design.
        </p>
      </section>
      <section class="mb-8">
        <h2 class="text-2xl font-semibold border-b pb-1 mb-2">Experience</h2>
        <div class="mb-4">
          <h3 class="text-xl font-semibold">Senior Graphic Designer</h3>
          <p class="text-sm italic">ABC Creative Agency | 2021 - Present</p>
          <ul class="list-disc pl-5 mt-1">
            <li>Led a team of 4 designers across branding projects for tech startups.</li>
            <li>Developed brand identities and marketing collateral for over 20 clients.</li>
            <li>Enhanced user engagement by 30% through UI/UX improvements on client platforms.</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold">Graphic Designer</h3>
          <p class="text-sm italic">Freelance | 2017 - 2021</p>
          <ul class="list-disc pl-5 mt-1">
            <li>Provided design solutions for clients across Egypt, UAE, and Saudi Arabia.</li>
            <li>Worked on projects including logos, websites, packaging, and social media content.</li>
          </ul>
        </div>
      </section>
      <section class="mb-8">
        <h2 class="text-2xl font-semibold border-b pb-1 mb-2">Education</h2>
        <p>
          <strong>Bachelor of Business Administration</strong> — October University for Modern Sciences and Arts (MSA)
        </p>
      </section>
      <section>
        <h2 class="text-2xl font-semibold border-b pb-1 mb-2">Skills</h2>
        <ul class="list-disc pl-5">
          <li>Adobe Creative Suite (Photoshop, Illustrator, InDesign, XD)</li>
          <li>Branding & Visual Identity</li>
          <li>UI/UX Design</li>
          <li>Motion Graphics & Video Editing</li>
          <li>Social Media Content Design</li>
        </ul>
      </section>
    </main>
  `;
}
