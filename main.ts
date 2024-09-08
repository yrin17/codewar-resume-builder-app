document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form") as HTMLFormElement;
    const resumeSection = document.getElementById("resume-section") as HTMLDivElement;
    const experienceSection = document.getElementById("experience-section") as HTMLDivElement;
    const educationSection = document.getElementById("education-section") as HTMLDivElement;

    let experienceCount = 0;
    let educationCount = 0;

    const addExperience = () => {
        experienceCount++;
        const div = document.createElement("div");
        div.classList.add("experience");
        div.innerHTML = `
            <label for="job-title-${experienceCount}">Job Title:</label>
            <input type="text" id="job-title-${experienceCount}" required>

            <label for="job-company-${experienceCount}">Company:</label>
            <input type="text" id="job-company-${experienceCount}" required>

            <label for="job-dates-${experienceCount}">Dates:</label>
            <input type="text" id="job-dates-${experienceCount}" required>

            <label for="job-description-${experienceCount}">Description:</label>
            <textarea id="job-description-${experienceCount}" rows="4" required></textarea>
        `;
        experienceSection.appendChild(div);
    };

    const addEducation = () => {
        educationCount++;
        const div = document.createElement("div");
        div.classList.add("education");
        div.innerHTML = `
            <label for="degree-title-${educationCount}">Degree Title:</label>
            <input type="text" id="degree-title-${educationCount}" required>

            <label for="degree-institution-${educationCount}">Institution:</label>
            <input type="text" id="degree-institution-${educationCount}" required>

            <label for="degree-dates-${educationCount}">Dates:</label>
            <input type="text" id="degree-dates-${educationCount}" required>
        `;
        educationSection.appendChild(div);
    };

    document.getElementById("add-experience")?.addEventListener("click", addExperience);
    document.getElementById("add-education")?.addEventListener("click", addEducation);

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = (document.getElementById("name") as HTMLInputElement).value;
        const title = (document.getElementById("title") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const website = (document.getElementById("website") as HTMLInputElement).value;

        let experienceHtml = "";
        for (let i = 1; i <= experienceCount; i++) {
            const jobTitle = (document.getElementById(`job-title-${i}`) as HTMLInputElement).value;
            const jobCompany = (document.getElementById(`job-company-${i}`) as HTMLInputElement).value;
            const jobDates = (document.getElementById(`job-dates-${i}`) as HTMLInputElement).value;
            const jobDescription = (document.getElementById(`job-description-${i}`) as HTMLTextAreaElement).value;

            experienceHtml += `
                <div class="resume-section">
                    <h3>${jobTitle} at ${jobCompany}</h3>
                    <p><strong>${jobDates}</strong></p>
                    <p>${jobDescription}</p>
                </div>
            `;
        }

        let educationHtml = "";
        for (let i = 1; i <= educationCount; i++) {
            const degreeTitle = (document.getElementById(`degree-title-${i}`) as HTMLInputElement).value;
            const degreeInstitution = (document.getElementById(`degree-institution-${i}`) as HTMLInputElement).value;
            const degreeDates = (document.getElementById(`degree-dates-${i}`) as HTMLInputElement).value;

            educationHtml += `
                <div class="resume-section">
                    <h3>${degreeTitle}</h3>
                    <p><strong>${degreeInstitution}</strong></p>
                    <p>${degreeDates}</p>
                </div>
            `;
        }

        resumeSection.innerHTML = `
            <div class="resume-header">
                <h2>${name}</h2>
                <p>${title}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Website: ${website}</p>
            </div>
            <div class="resume-body">
                <h2>Experience</h2>
                ${experienceHtml}
                <h2>Education</h2>
                ${educationHtml}
            </div>
        `;
    });
});