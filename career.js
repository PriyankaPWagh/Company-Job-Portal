const jobs = [
    { title: "B.D.E (Business Development Executive)", location: "Dehradun", experience: "Fresher Or 1 Year Experience" },
    { title: "I.T Sales", location: "Dehradun", experience: "Fresher Or 1 Year Experience" },
    { title: "UI/UX Designer", location: "Dehradun", experience: "Fresher Or 1 Year Experience" },
    { title: "Graphic Designer", location: "Dehradun", experience: "Fresher Or 1 Year Experience" },
  ];
  
  const jobContainer = document.getElementById("jobContainer");
  const jobModal = document.getElementById("jobModal");
  const formModal = document.getElementById("formModal");
  
  function loadJobs() {
    jobs.forEach((job, index) => {
      const div = document.createElement("div");
      div.className = "job-card";
      div.innerHTML = `
        <h3>${job.title}</h3>
        <p><i>Location:</i> ${job.location}</p>
        <p><i>Experience:</i> ${job.experience}</p>
       <button onclick="window.location.href='job-details.html?job=it-sales'">View Details</button>
      `;
      jobContainer.appendChild(div);
    });
  }
  
  function openModal(index) {
    document.getElementById("jobTitle").textContent = jobs[index].title;
    document.getElementById("jobLocation").textContent = jobs[index].location;
    document.getElementById("jobExperience").textContent = jobs[index].experience;
    jobModal.style.display = "flex";
  }
  
  function closeModal() {
    jobModal.style.display = "none";
  }
  
  function showForm() {
    jobModal.style.display = "none";
    formModal.style.display = "flex";
  }
  
  function closeForm() {
    formModal.style.display = "none";
  }
  
  function submitForm(event) {
    event.preventDefault();
    alert("Application submitted successfully!");
    document.getElementById("applyForm").reset();
    formModal.style.display = "none";
  }
  
  loadJobs();
  