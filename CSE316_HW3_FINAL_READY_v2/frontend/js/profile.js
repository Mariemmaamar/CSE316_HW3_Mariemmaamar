//MARIEM MAAMAR ID:116028086
var profileContent = document.getElementById("profileContent"); // Get the container element for displaying the profile section
var user = JSON.parse(localStorage.getItem("user") || "null"); //Try to load the user object from localStorage


if (!user) { // If no user is found, show the registration/login form

    profileContent.innerHTML = `
    <div class="card profile-card">
      <div class="card-body">
        <h2 class="card-title text-center mb-4">Create Account / Login</h2>
        <form onsubmit="saveUser(event)">
          <div class="mb-3"><label class="form-label">Username</label><input class="form-control" id="username" required></div>
          <div class="mb-3"><label class="form-label">Email</label><input type="email" class="form-control" id="email" required></div>
          <div class="mb-3"><label class="form-label">Password</label><input type="password" class="form-control" id="password" required></div>
          <button class="btn btn-primary w-100 mt-3" type="submit">Submit</button>
        </form>
      </div>
    </div>`;
} else {
    showProfile();
}

function saveUser(e) { // Save the user to localStorage when the form is submitted
    e.preventDefault();
    var user = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Account created!");
    location.reload();
}

function showProfile() {
    var u = JSON.parse(localStorage.getItem("user"));

    profileContent.innerHTML = `
    <div class="card profile-card">
        
        <div class="card-body text-center" id="viewProfile">
            <h2 class="card-title mb-4">Profile Information</h2>
            
            <div class="info-group">
                <p><b>Username:</b> ${u.username}</p>
                <p><b>Email:</b> ${u.email}</p>
                <p><b>Password:</b> ${u.password}</p>
            </div>
            
            <div class="d-grid gap-2 mt-4">
                <button class="btn btn-warning" onclick="toggleEditMode()">Edit Information</button>
                <button class="btn btn-danger" onclick="logout()">Logout</button>
            </div>
        </div>
        
        <div class="card-body" id="editProfile" style="display:none;">
            <h2 class="card-title text-center mb-4">Edit Information</h2>
            <form onsubmit="updateUser(event)">
                <div class="mb-3">
                    <label class="form-label">Username</label>
                    <input class="form-control" id="editUsername" value="${u.username}" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" id="editEmail" value="${u.email}" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" class="form-control" id="editPassword" value="${u.password}" required>
                </div>
                
                <div class="d-grid gap-2 mt-4">
                    <button class="btn btn-primary" type="submit">Save Changes</button>
                    <button class="btn btn-secondary" type="button" onclick="toggleEditMode()">Cancel</button>
                </div>
            </form>
        </div>
    </div>`;
}
// Toggle between viewing and editing the profile
function toggleEditMode() {
    var viewPanel = document.getElementById("viewProfile");
    var editPanel = document.getElementById("editProfile");

    if (viewPanel.style.display !== "none") {
        viewPanel.style.display = "none";
        editPanel.style.display = "block";

        var u = JSON.parse(localStorage.getItem("user"));
        document.getElementById("editUsername").value = u.username;
        document.getElementById("editEmail").value = u.email;
        document.getElementById("editPassword").value = u.password;

    } else { // Switch back to view mode
        editPanel.style.display = "none";
        viewPanel.style.display = "block";
    }
}

function updateUser(e) { // Save the updated profile info
    e.preventDefault();
    var user = {
        username: document.getElementById("editUsername").value,
        email: document.getElementById("editEmail").value,
        password: document.getElementById("editPassword").value
    };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Profile updated!");

    showProfile(); // Refresh the profile view
}
// Clear localStorage and reload page on logout
function logout() {
    localStorage.removeItem("user");
    alert("you have been logged out succefully!");
    location.reload();
}