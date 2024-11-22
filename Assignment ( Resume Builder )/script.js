function generateResume() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const objective = document.getElementById('objective').value;
    const degree = document.getElementById('degree').value;
    const institution = document.getElementById('institution').value;
    const year = document.getElementById('year').value;
    const grade = document.getElementById('grade').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const company = document.getElementById('company').value;
    const duration = document.getElementById('duration').value;
    const jobDescription = document.getElementById('jobDescription').value;
    const skills = document.getElementById('skills').value;
    const hobbies = document.getElementById('hobbies').value;
    const languages = document.getElementById('languages').value;

    const resumeOutput = `
        <h2>Resume: ${fullName}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Career Objective:</strong> ${objective}</p>

        <h3>Education</h3>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>Institution:</strong> ${institution}</p>
        <p><strong>Year of Completion:</strong> ${year}</p>
        <p><strong>Grade/Percentage:</strong> ${grade}</p>

        <h3>Work Experience</h3>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Duration:</strong> ${duration}</p>
        <p><strong>Job Description:</strong> ${jobDescription}</p>

        <h3>Skills</h3>
        <p>${skills}</p>

        <h3>Additional Information</h3>
        <p><strong>Hobbies:</strong> ${hobbies}</p>
        <p><strong>Languages:</strong> ${languages}</p>
    `;

    const resumeSection = document.getElementById('resumeOutput');
    resumeSection.innerHTML = resumeOutput;
    resumeSection.style.display = 'block';
}
