document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.float-icon');
    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            alert(`You clicked on ${icon.src.split('/').pop()}`);
        });
    });
});


// resume script

const resumeInput = document.getElementById('resumeInput');
const filePreview = document.getElementById('filePreview');
const resumeViewer = document.getElementById('resumeViewer');
const resumeStatus = document.getElementById('resumeStatus');

resumeInput.addEventListener('change', () => {
  const file = resumeInput.files[0];

  if (!file) {
    filePreview.textContent = 'No file selected';
    resumeViewer.innerHTML = '';
    return;
  }

  filePreview.textContent = `Selected: ${file.name}`;

  const fileURL = URL.createObjectURL(file);
  const extension = file.name.split('.').pop().toLowerCase();

  if (extension === 'pdf') {
    resumeViewer.innerHTML = `<iframe src="${fileURL}" width="100%" height="400px" style="border: 1px solid #ccc; border-radius: 8px;"></iframe>`;
  } else if (extension === 'doc' || extension === 'docx') {
    resumeViewer.innerHTML = `
      <p style="margin-top: 10px;">📄 <strong>${file.name}</strong> preview not supported.<br>
      <a href="${fileURL}" download>Download to view</a></p>`;
  } else {
    resumeViewer.innerHTML = `<p style="color: red;">Unsupported file format.</p>`;
  }
});

document.getElementById('resumeForm').addEventListener('submit', function (e) {
  e.preventDefault();
  resumeStatus.textContent = '✅ Resume submitted successfully!';
  resumeStatus.style.color = '#28a745';
});

// skills script
const skillForm = document.getElementById('skillForm');
const skillName = document.getElementById('skillName');
const skillLevel = document.getElementById('skillLevel');
const skillList = document.getElementById('skillList');

const uploadedSkills = new Map(); // To avoid duplicates

skillForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const skill = skillName.value;
  const level = skillLevel.value;

  if (uploadedSkills.has(skill)) {
    alert(`${skill} is already added.`);
    return;
  }

  // Store skill
  uploadedSkills.set(skill, level);

  // Create and append list item
  const li = document.createElement('li');
  li.innerHTML = `
    <strong>${skill}</strong> — ${level}%
    <div class="progress-bar">
      <div class="progress" style="width: ${level}%"></div>
    </div>
  `;
  skillList.appendChild(li);

  // Reset form
  skillForm.reset();
  skillName.selectedIndex = 0;
});


// project script
const videoInput = document.getElementById('videoInput');
const videoPreview = document.getElementById('videoPreview');

videoInput.addEventListener('change', () => {
  const file = videoInput.files[0];
  if (file) {
    const fileURL = URL.createObjectURL(file);
    videoPreview.src = fileURL;
    videoPreview.style.display = 'block';
  } else {
    videoPreview.style.display = 'none';
  }
});

document.getElementById("projectForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("message").textContent = "🎉 Project uploaded successfully!";
});


// contact

function openContact() {
    document.getElementById('contactOverlay').style.display = 'flex';
  }

  function closeContact() {
    document.getElementById('contactOverlay').style.display = 'none';
  }