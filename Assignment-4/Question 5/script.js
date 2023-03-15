const subjects = {
    frontend: {
        topics: {
            html: ["Links", "Images", "Tables", "Lists"],
            css: ["Borders", "Margins", "Backgrounds"],
            javascript: ["Variables", "Operators", "Arrays", "Objects"]
        }
    },
    backend: {
        topics: {
            nodejs: ["NPM", "HTTP", "Express"],
            php: ["Strings", "Arrays", "Regex"]
        }
    }
}

const subjectDropdown = document.getElementById("subject");
const topicDropdown = document.getElementById("topic");
const chapterDropdown = document.getElementById("chapter");

function populateTopics() {
    const subject = subjectDropdown.value;
    topicDropdown.innerHTML = "<option value=''></option>";

    if (subject === "") {
        topicDropdown.disabled = true;
        chapterDropdown.disabled = true;
        return;
    }

    topicDropdown.disabled = false;
    const topics = subjects[subject].topics;
    for (const topic in topics) {
        const option = document.createElement("option");
        option.text = topic;
        option.value = topic;
        topicDropdown.add(option);
    }

    populateChapters();
}

function populateChapters() {
    const subject = subjectDropdown.value;
    const topic = topicDropdown.value;
    chapterDropdown.innerHTML = "<option value=''></option>";

    if (topic === "") {
        chapterDropdown.disabled = true;
        return;
    }

    chapterDropdown.disabled = false;
    const chapters = subjects[subject].topics[topic];
    for (const chapter of chapters) {
        const option = document.createElement("option");
        option.text = chapter;
        option.value = chapter;
        chapterDropdown.add(option);
    }
}

populateTopics();
