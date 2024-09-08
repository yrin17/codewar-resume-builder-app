document.addEventListener("DOMContentLoaded", function () {
    var _a, _b;
    var form = document.getElementById("resume-form");
    var resumeSection = document.getElementById("resume-section");
    var experienceSection = document.getElementById("experience-section");
    var educationSection = document.getElementById("education-section");
    var experienceCount = 0;
    var educationCount = 0;
    var addExperience = function () {
        experienceCount++;
        var div = document.createElement("div");
        div.classList.add("experience");
        div.innerHTML = "\n            <label for=\"job-title-".concat(experienceCount, "\">Job Title:</label>\n            <input type=\"text\" id=\"job-title-").concat(experienceCount, "\" required>\n\n            <label for=\"job-company-").concat(experienceCount, "\">Company:</label>\n            <input type=\"text\" id=\"job-company-").concat(experienceCount, "\" required>\n\n            <label for=\"job-dates-").concat(experienceCount, "\">Dates:</label>\n            <input type=\"text\" id=\"job-dates-").concat(experienceCount, "\" required>\n\n            <label for=\"job-description-").concat(experienceCount, "\">Description:</label>\n            <textarea id=\"job-description-").concat(experienceCount, "\" rows=\"4\" required></textarea>\n        ");
        experienceSection.appendChild(div);
    };
    var addEducation = function () {
        educationCount++;
        var div = document.createElement("div");
        div.classList.add("education");
        div.innerHTML = "\n            <label for=\"degree-title-".concat(educationCount, "\">Degree Title:</label>\n            <input type=\"text\" id=\"degree-title-").concat(educationCount, "\" required>\n\n            <label for=\"degree-institution-").concat(educationCount, "\">Institution:</label>\n            <input type=\"text\" id=\"degree-institution-").concat(educationCount, "\" required>\n\n            <label for=\"degree-dates-").concat(educationCount, "\">Dates:</label>\n            <input type=\"text\" id=\"degree-dates-").concat(educationCount, "\" required>\n        ");
        educationSection.appendChild(div);
    };
    (_a = document.getElementById("add-experience")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", addExperience);
    (_b = document.getElementById("add-education")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", addEducation);
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var title = document.getElementById("title").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var website = document.getElementById("website").value;
        var experienceHtml = "";
        for (var i = 1; i <= experienceCount; i++) {
            var jobTitle = document.getElementById("job-title-".concat(i)).value;
            var jobCompany = document.getElementById("job-company-".concat(i)).value;
            var jobDates = document.getElementById("job-dates-".concat(i)).value;
            var jobDescription = document.getElementById("job-description-".concat(i)).value;
            experienceHtml += "\n                <div class=\"resume-section\">\n                    <h3>".concat(jobTitle, " at ").concat(jobCompany, "</h3>\n                    <p><strong>").concat(jobDates, "</strong></p>\n                    <p>").concat(jobDescription, "</p>\n                </div>\n            ");
        }
        var educationHtml = "";
        for (var i = 1; i <= educationCount; i++) {
            var degreeTitle = document.getElementById("degree-title-".concat(i)).value;
            var degreeInstitution = document.getElementById("degree-institution-".concat(i)).value;
            var degreeDates = document.getElementById("degree-dates-".concat(i)).value;
            educationHtml += "\n                <div class=\"resume-section\">\n                    <h3>".concat(degreeTitle, "</h3>\n                    <p><strong>").concat(degreeInstitution, "</strong></p>\n                    <p>").concat(degreeDates, "</p>\n                </div>\n            ");
        }
        resumeSection.innerHTML = "\n            <div class=\"resume-header\">\n                <h2>".concat(name, "</h2>\n                <p>").concat(title, "</p>\n                <p>Email: ").concat(email, "</p>\n                <p>Phone: ").concat(phone, "</p>\n                <p>Website: ").concat(website, "</p>\n            </div>\n            <div class=\"resume-body\">\n                <h2>Experience</h2>\n                ").concat(experienceHtml, "\n                <h2>Education</h2>\n                ").concat(educationHtml, "\n            </div>\n        ");
    });
});
