// Function to scroll to the form section
function scrollToForm(): void {
    const formSection = document.getElementById('formSection');
    if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Function to update the resume preview in real-time
function updateResumePreview(): void {
    // Personal Information
    const nameInput = (document.getElementById('name') as HTMLInputElement)?.value.trim() || '';
    const emailInput = (document.getElementById('email') as HTMLInputElement)?.value.trim() || '';
    const phoneInput = (document.getElementById('phone') as HTMLInputElement)?.value.trim() || '';
    const addressInput = (document.getElementById('address') as HTMLInputElement)?.value.trim() || '';

    const resumeName = document.getElementById('resumeName') as HTMLElement;
    const resumeEmail = document.getElementById('resumeEmail') as HTMLElement;
    const resumePhone = document.getElementById('resumePhone') as HTMLElement;
    const resumeAddress = document.getElementById('resumeAddress') as HTMLElement;

    resumeName.textContent = nameInput;
    resumeEmail.textContent = emailInput;
    resumePhone.textContent = phoneInput;
    resumeAddress.textContent = addressInput;

    // Education Sections
    const secondarySchoolInput = (document.getElementById('secondarySchool') as HTMLInputElement)?.value.trim() || '';
    const secondaryYearInput = (document.getElementById('secondaryYear') as HTMLInputElement)?.value.trim() || '';
    const collegeInput = (document.getElementById('college') as HTMLInputElement)?.value.trim() || '';
    const collegeYearInput = (document.getElementById('collegeYear') as HTMLInputElement)?.value.trim() || '';
    const universityInput = (document.getElementById('university') as HTMLInputElement)?.value.trim() || '';
    const universityYearInput = (document.getElementById('universityYear') as HTMLInputElement)?.value.trim() || '';

    const secondarySection = document.getElementById('secondarySection') as HTMLElement;
    const collegeSection = document.getElementById('collegeSection') as HTMLElement;
    const universitySection = document.getElementById('universitySection') as HTMLElement;

    secondarySection.style.display = secondarySchoolInput || secondaryYearInput ? 'block' : 'none';
    (document.getElementById('resumeSecondarySchool') as HTMLElement).textContent = secondarySchoolInput;
    (document.getElementById('resumeSecondaryYear') as HTMLElement).textContent = secondaryYearInput;

    collegeSection.style.display = collegeInput || collegeYearInput ? 'block' : 'none';
    (document.getElementById('resumeCollege') as HTMLElement).textContent = collegeInput;
    (document.getElementById('resumeCollegeYear') as HTMLElement).textContent = collegeYearInput;

    universitySection.style.display = universityInput || universityYearInput ? 'block' : 'none';
    (document.getElementById('resumeUniversity') as HTMLElement).textContent = universityInput;
    (document.getElementById('resumeUniversityYear') as HTMLElement).textContent = universityYearInput;

    // Work Experience
    const jobTitleInput = (document.getElementById('jobTitle') as HTMLInputElement)?.value.trim() || '';
    const companyInput = (document.getElementById('company') as HTMLInputElement)?.value.trim() || '';
    const workYearsInput = (document.getElementById('workYears') as HTMLInputElement)?.value.trim() || '';

    (document.getElementById('resumeJobTitle') as HTMLElement).textContent = jobTitleInput;
    (document.getElementById('resumeCompany') as HTMLElement).textContent = companyInput;
    (document.getElementById('resumeWorkYears') as HTMLElement).textContent = workYearsInput;

    // Skills
    const skillsInput = (document.getElementById('skills') as HTMLInputElement)?.value.trim() || '';
    (document.getElementById('resumeSkills') as HTMLElement).textContent = skillsInput;

    // Show buttons after generating resume
    document.getElementById('printResumeButton')!.style.display = 'block';
    document.getElementById('createNewResumeButton')!.style.display = 'block';

    // Ensure the resume section is visible again after editing
    const resumeSection = document.getElementById('resumeSection') as HTMLElement;
    resumeSection.style.display = 'block'; // Make sure the resume section is shown
}


// Function to print the resume with styling
function printResume(): void {
    const resumeSection = document.getElementById('resumeSection')?.innerHTML || '';

    const printWindow = window.open('', '_blank');
    if (printWindow) {
        // Collect the existing styles from the page
        const stylesheets = Array.prototype.slice.call(document.querySelectorAll('link[rel="stylesheet"], style')) as (HTMLLinkElement | HTMLStyleElement)[];
        const existingStyles = stylesheets.map(style => style.outerHTML).join('\n');

        printWindow.document.open();
        printWindow.document.write(`
            <html>
                <head>
                    <title>Print Resume</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                        }
                        /* Include existing styles */
                        ${existingStyles}
                    </style>
                </head>
                <body>
                    <div id="resumeSection">${resumeSection}</div>
                    <script>
                        // Ensure that the page has finished loading
                        window.onload = function() {
                            // Hide buttons before printing
                            document.querySelectorAll('.print-hide').forEach(el => el.style.display = 'none');
                            window.print();
                        }
                    </script>
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.focus();
    }
}


// Function to create a new resume
function createNewResume(): void {
    // Reset the form
    (document.getElementById('resumeForm') as HTMLFormElement).reset();

    // Clear the resume section
    const resumeSection = document.getElementById('resumeSection')!;
    resumeSection.querySelectorAll('span').forEach(span => span.textContent = '');
    resumeSection.querySelectorAll('div').forEach(div => div.style.display = 'none');

    // Hide the print and create new resume buttons
    document.getElementById('printResumeButton')!.style.display = 'none';
    document.getElementById('createNewResumeButton')!.style.display = 'none';

    // Scroll to the form section
    scrollToForm();
}

// Event listener to update resume preview as the user types
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
resumeForm.addEventListener('input', updateResumePreview);

// Event listener for the "See Your Resume" button to scroll to the resume display section
const seeResumeButton = document.getElementById('seeResumeButton') as HTMLButtonElement;
seeResumeButton.addEventListener('click', () => {
    updateResumePreview(); // Ensure the resume is updated before scrolling
    const resumeSection = document.getElementById('resumeSection');
    if (resumeSection) {
        resumeSection.scrollIntoView({ behavior: 'smooth' });
    }
});

// Event listener for the "Print Resume" button
const printResumeButton = document.getElementById('printResumeButton') as HTMLButtonElement;
printResumeButton.addEventListener('click', printResume);

// Event listener for the "Create New Resume" button
const createNewResumeButton = document.getElementById('createNewResumeButton') as HTMLButtonElement;
createNewResumeButton.addEventListener('click', createNewResume);

// Function to show the form and hide the resume section
function editResume(): void {
    // Show the form section
    const formSection = document.getElementById('formSection') as HTMLElement;
    formSection.style.display = 'block';

    // Hide the resume section
    const resumeSection = document.getElementById('resumeSection') as HTMLElement;
    resumeSection.style.display = 'none';

    // Hide the print and create new resume buttons
    document.getElementById('printResumeButton')!.style.display = 'none';
    document.getElementById('createNewResumeButton')!.style.display = 'none';
}


// Event listener for the "Edit Resume" button
const editResumeButton = document.getElementById('editResumeButton') as HTMLButtonElement;
editResumeButton.addEventListener('click', editResume);

// Ensure the "Edit Resume" button is visible after loading
document.addEventListener('DOMContentLoaded', () => {
    const editResumeButton = document.getElementById('editResumeButton');
    if (editResumeButton) {
        editResumeButton.style.display = 'block'; // Make sure the button is displayed
    }
});
// Function to generate a unique URL based on the username
function generateUniqueURL(username: string): string {
    return `https://${username}.vercel.app/resume`;
}

// Function to handle resume generation and sharing options
function generateResume(): void {
    const username = (document.getElementById('username') as HTMLInputElement).value;

    if (username) {
        const uniqueURL = generateUniqueURL(username);

        // Display the generated link
        const resumeLink = document.getElementById('resumeLink') as HTMLAnchorElement;
        resumeLink.href = uniqueURL;
        resumeLink.textContent = uniqueURL;

        // Show the sharing options
        const shareOptions = document.getElementById('shareOptions') as HTMLElement;
        shareOptions.style.display = 'block';
    }
}

// Function to download the resume as a PDF
function downloadResumeAsPDF(): void {
    const resumeContent = document.body.innerHTML;

    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,' + btoa(resumeContent); // Simulate the PDF content for now
    link.download = 'resume.pdf';
    link.click();
}

// Event listeners
document.getElementById('generateResumeButton')?.addEventListener('click', generateResume);
document.getElementById('downloadPDFButton')?.addEventListener('click', downloadResumeAsPDF);