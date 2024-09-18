var _a, _b;
// Function to scroll to the form section
function scrollToForm() {
    var formSection = document.getElementById('formSection');
    if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
    }
}
// Function to update the resume preview in real-time
function updateResumePreview() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    // Personal Information
    var nameInput = ((_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value.trim()) || '';
    var emailInput = ((_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value.trim()) || '';
    var phoneInput = ((_c = document.getElementById('phone')) === null || _c === void 0 ? void 0 : _c.value.trim()) || '';
    var addressInput = ((_d = document.getElementById('address')) === null || _d === void 0 ? void 0 : _d.value.trim()) || '';
    var resumeName = document.getElementById('resumeName');
    var resumeEmail = document.getElementById('resumeEmail');
    var resumePhone = document.getElementById('resumePhone');
    var resumeAddress = document.getElementById('resumeAddress');
    resumeName.textContent = nameInput;
    resumeEmail.textContent = emailInput;
    resumePhone.textContent = phoneInput;
    resumeAddress.textContent = addressInput;
    // Education Sections
    var secondarySchoolInput = ((_e = document.getElementById('secondarySchool')) === null || _e === void 0 ? void 0 : _e.value.trim()) || '';
    var secondaryYearInput = ((_f = document.getElementById('secondaryYear')) === null || _f === void 0 ? void 0 : _f.value.trim()) || '';
    var collegeInput = ((_g = document.getElementById('college')) === null || _g === void 0 ? void 0 : _g.value.trim()) || '';
    var collegeYearInput = ((_h = document.getElementById('collegeYear')) === null || _h === void 0 ? void 0 : _h.value.trim()) || '';
    var universityInput = ((_j = document.getElementById('university')) === null || _j === void 0 ? void 0 : _j.value.trim()) || '';
    var universityYearInput = ((_k = document.getElementById('universityYear')) === null || _k === void 0 ? void 0 : _k.value.trim()) || '';
    var secondarySection = document.getElementById('secondarySection');
    var collegeSection = document.getElementById('collegeSection');
    var universitySection = document.getElementById('universitySection');
    secondarySection.style.display = secondarySchoolInput || secondaryYearInput ? 'block' : 'none';
    document.getElementById('resumeSecondarySchool').textContent = secondarySchoolInput;
    document.getElementById('resumeSecondaryYear').textContent = secondaryYearInput;
    collegeSection.style.display = collegeInput || collegeYearInput ? 'block' : 'none';
    document.getElementById('resumeCollege').textContent = collegeInput;
    document.getElementById('resumeCollegeYear').textContent = collegeYearInput;
    universitySection.style.display = universityInput || universityYearInput ? 'block' : 'none';
    document.getElementById('resumeUniversity').textContent = universityInput;
    document.getElementById('resumeUniversityYear').textContent = universityYearInput;
    // Work Experience
    var jobTitleInput = ((_l = document.getElementById('jobTitle')) === null || _l === void 0 ? void 0 : _l.value.trim()) || '';
    var companyInput = ((_m = document.getElementById('company')) === null || _m === void 0 ? void 0 : _m.value.trim()) || '';
    var workYearsInput = ((_o = document.getElementById('workYears')) === null || _o === void 0 ? void 0 : _o.value.trim()) || '';
    document.getElementById('resumeJobTitle').textContent = jobTitleInput;
    document.getElementById('resumeCompany').textContent = companyInput;
    document.getElementById('resumeWorkYears').textContent = workYearsInput;
    // Skills
    var skillsInput = ((_p = document.getElementById('skills')) === null || _p === void 0 ? void 0 : _p.value.trim()) || '';
    document.getElementById('resumeSkills').textContent = skillsInput;
    // Show buttons after generating resume
    document.getElementById('printResumeButton').style.display = 'block';
    document.getElementById('createNewResumeButton').style.display = 'block';
    // Ensure the resume section is visible again after editing
    var resumeSection = document.getElementById('resumeSection');
    resumeSection.style.display = 'block'; // Make sure the resume section is shown
}
// Function to print the resume with styling
function printResume() {
    var _a;
    var resumeSection = ((_a = document.getElementById('resumeSection')) === null || _a === void 0 ? void 0 : _a.innerHTML) || '';
    var printWindow = window.open('', '_blank');
    if (printWindow) {
        // Collect the existing styles from the page
        var stylesheets = Array.prototype.slice.call(document.querySelectorAll('link[rel="stylesheet"], style'));
        var existingStyles = stylesheets.map(function (style) { return style.outerHTML; }).join('\n');
        printWindow.document.open();
        printWindow.document.write("\n            <html>\n                <head>\n                    <title>Print Resume</title>\n                    <style>\n                        body {\n                            font-family: Arial, sans-serif;\n                        }\n                        /* Include existing styles */\n                        ".concat(existingStyles, "\n                    </style>\n                </head>\n                <body>\n                    <div id=\"resumeSection\">").concat(resumeSection, "</div>\n                    <script>\n                        // Ensure that the page has finished loading\n                        window.onload = function() {\n                            // Hide buttons before printing\n                            document.querySelectorAll('.print-hide').forEach(el => el.style.display = 'none');\n                            window.print();\n                        }\n                    </script>\n                </body>\n            </html>\n        "));
        printWindow.document.close();
        printWindow.focus();
    }
}
// Function to create a new resume
function createNewResume() {
    // Reset the form
    document.getElementById('resumeForm').reset();
    // Clear the resume section
    var resumeSection = document.getElementById('resumeSection');
    resumeSection.querySelectorAll('span').forEach(function (span) { return span.textContent = ''; });
    resumeSection.querySelectorAll('div').forEach(function (div) { return div.style.display = 'none'; });
    // Hide the print and create new resume buttons
    document.getElementById('printResumeButton').style.display = 'none';
    document.getElementById('createNewResumeButton').style.display = 'none';
    // Scroll to the form section
    scrollToForm();
}
// Event listener to update resume preview as the user types
var resumeForm = document.getElementById('resumeForm');
resumeForm.addEventListener('input', updateResumePreview);
// Event listener for the "See Your Resume" button to scroll to the resume display section
var seeResumeButton = document.getElementById('seeResumeButton');
seeResumeButton.addEventListener('click', function () {
    updateResumePreview(); // Ensure the resume is updated before scrolling
    var resumeSection = document.getElementById('resumeSection');
    if (resumeSection) {
        resumeSection.scrollIntoView({ behavior: 'smooth' });
    }
});
// Event listener for the "Print Resume" button
var printResumeButton = document.getElementById('printResumeButton');
printResumeButton.addEventListener('click', printResume);
// Event listener for the "Create New Resume" button
var createNewResumeButton = document.getElementById('createNewResumeButton');
createNewResumeButton.addEventListener('click', createNewResume);
// Function to show the form and hide the resume section
function editResume() {
    // Show the form section
    var formSection = document.getElementById('formSection');
    formSection.style.display = 'block';
    // Hide the resume section
    var resumeSection = document.getElementById('resumeSection');
    resumeSection.style.display = 'none';
    // Hide the print and create new resume buttons
    document.getElementById('printResumeButton').style.display = 'none';
    document.getElementById('createNewResumeButton').style.display = 'none';
}
// Event listener for the "Edit Resume" button
var editResumeButton = document.getElementById('editResumeButton');
editResumeButton.addEventListener('click', editResume);
// Ensure the "Edit Resume" button is visible after loading
document.addEventListener('DOMContentLoaded', function () {
    var editResumeButton = document.getElementById('editResumeButton');
    if (editResumeButton) {
        editResumeButton.style.display = 'block'; // Make sure the button is displayed
    }
});
// Function to generate a unique URL based on the username
function generateUniqueURL(username) {
    return "https://".concat(username, ".vercel.app/resume");
}
// Function to handle resume generation and sharing options
function generateResume() {
    var username = document.getElementById('username').value;
    if (username) {
        var uniqueURL = generateUniqueURL(username);
        // Display the generated link
        var resumeLink = document.getElementById('resumeLink');
        resumeLink.href = uniqueURL;
        resumeLink.textContent = uniqueURL;
        // Show the sharing options
        var shareOptions = document.getElementById('shareOptions');
        shareOptions.style.display = 'block';
    }
}
// Function to download the resume as a PDF
function downloadResumeAsPDF() {
    var resumeContent = document.body.innerHTML;
    var link = document.createElement('a');
    link.href = 'data:application/pdf;base64,' + btoa(resumeContent); // Simulate the PDF content for now
    link.download = 'resume.pdf';
    link.click();
}
// Event listeners
(_a = document.getElementById('generateResumeButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', generateResume);
(_b = document.getElementById('downloadPDFButton')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', downloadResumeAsPDF);