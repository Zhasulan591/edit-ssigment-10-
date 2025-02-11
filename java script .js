let turnOf=1;
function changeColor() {
    if(turnOf==1)
    {
        document.body.style.backgroundColor="black";
        turnOf=-1;
    }
    else if(turnOf==-1)
    {
        document.body.style.backgroundColor="white"
        turnOf=1;
    }
}
document.getElementById("btn").onclick = function(event) {
    event.preventDefault(); 
    
    let text = document.getElementById("srcForSearch").value.trim(); 
    let textForSearch = text.toUpperCase();
    
    const div = document.getElementById("service"); 
    const text1 = div.textContent; 
    let g = text1.toLowerCase();
    
    if (g.indexOf(textForSearch.toLowerCase()) !== -1) {

        window.location.href = "#" + text;
    } 
};
function mOver(obj) 
{
    obj.src="without us.png"
}
 function mOut(obj)
{
    obj.src="with us.jpg"
}
var newWin = window.open('/', 'example', 'width=600,height=400');
alert(newWin.location.href);
newWin.onload = function() {

  // создать div в документе нового окна
  var div = newWin.document.createElement('div'),
      body = newWin.document.body;

  div.innerHTML = 'Добро пожаловать!'
  div.style.fontSize = '30px'

  // вставить первым элементом в body нового окна
  body.insertBefore(div, body.firstChild);
}
const doctors = [
    { id: 1, firstName: "John", lastName: "Doe", specialization: "orthopedics" },
    { id: 2, firstName: "Jane", lastName: "Smith", specialization: "neurology" },
    { id: 3, firstName: "Michael", lastName: "Johnson", specialization: "cardiology" },
    { id: 4, firstName: "Emily", lastName: "Brown", specialization: "orthopedics" },
    { id: 5, firstName: "David", lastName: "Wilson", specialization: "neurology" },
    { id: 6, firstName: "Sarah", lastName: "Davis", specialization: "cardiology" }
  ];

  function renderDoctors(filteredDoctors) {
    const doctorList = $('.doctor-list');
    doctorList.empty(); 

    if (filteredDoctors.length === 0) {
      doctorList.append('<p class="text-center">No doctors found.</p>');
      return;
    }

    filteredDoctors.forEach(doctor => {
      const card = `
        <div class="doctor-card">
          <h5>Dr. ${doctor.firstName} ${doctor.lastName}</h5>
          <p><strong>Specialization:</strong> ${doctor.specialization}</p>
        </div>
      `;
      doctorList.append(card);
    });
  }

  function filterDoctors() {
    const searchQuery = $('#searchDoc').val().toLowerCase().trim();
    const specialization = $('#specialization').val();

    let filteredDoctors = doctors.filter(doctor => {
      const matchesSearch = doctor.lastName.toLowerCase().includes(searchQuery);
      const matchesSpecialization = !specialization || doctor.specialization === specialization;
      return matchesSearch && matchesSpecialization;
    });

    $('.doctor-card').fadeOut(300, function() {
      renderDoctors(filteredDoctors);
      $('.doctor-card').hide().fadeIn(300);
    });
  }

  $('#searchDoc').on('input', filterDoctors);
  $('#specialization').on('change', filterDoctors);
  $('#btn1').on('click', function(event) {
    event.preventDefault();
    filterDoctors();
  });

  renderDoctors(doctors);
  const registeredEmails = ["test@example.com", "user@domain.com"];

  function validateForm() {
    let isValid = true;

    $('.error-message').text('');

    const name = $('#name').val().trim();
    if (name === '') {
      $('#nameError').text('Name is required.');
      isValid = false;
    }

    const email = $('#email').val().trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === '') {
      $('#emailError').text('Email is required.');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      $('#emailError').text('Invalid email format.');
      isValid = false;
    } else if (registeredEmails.includes(email)) {
      $('#emailError').text('Email is already taken.');
      isValid = false;
    }
    const password = $('#password').val().trim();
    if (password === '') {
      $('#passwordError').text('Password is required.');
      isValid = false;
    } else if (password.length < 8) {
      $('#passwordError').text('Password must be at least 8 characters.');
      isValid = false;
    }

    const phone = $('#phone').val().trim();
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (phone === '') {
      $('#phoneError').text('Phone number is required.');
      isValid = false;
    } else if (!phoneRegex.test(phone)) {
      $('#phoneError').text('Invalid phone number format.');
      isValid = false;
    }

    const dob = $('#dob').val();
    const dobDate = new Date(dob);
    const today = new Date();
    if (dob === '') {
      $('#dobError').text('Date of Birth is required.');
      isValid = false;
    } else if (dobDate >= today) {
      $('#dobError').text('Invalid Date of Birth.');
      isValid = false;
    }

    const errorType = $('#errorType').val();
    if (errorType !== '') {
      switch (errorType) {
        case 'phone':
          $('#phoneError').text('Incorrect Phone Format.');
          isValid = false;
          break;
        case 'password':
          $('#passwordError').text('Weak Password.');
          isValid = false;
          break;
        case 'email':
          $('#emailError').text('Email Already Taken.');
          isValid = false;
          break;
        case 'dob':
          $('#dobError').text('Invalid Date of Birth.');
          isValid = false;
          break;
      }
    }

    if (isValid) {
      $('.container').animate({ opacity: 0.5 }, 500, function() {
        alert('Registration successful!');
        $('.container').animate({ opacity: 1 }, 500);
      });
    }

    return isValid;
  }

  $('#registrationForm').on('submit', function(event) {
    event.preventDefault();
    validateForm();
  });
  const bookedSlots = [
    { doctor: "dr_john", date: "2023-10-25", time: "10:00" },
    { doctor: "dr_jane", date: "2023-10-25", time: "11:00" },
    { doctor: "dr_michael", date: "2023-10-26", time: "14:00" }
  ];

  const availableSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

  function renderTimeSlots(doctor, date) {
    const timeSlotsContainer = $('#timeSlots');
    timeSlotsContainer.empty(); 

    if (!doctor || !date) {
      timeSlotsContainer.append('<p>Please select a doctor and date.</p>');
      return;
    }

    availableSlots.forEach(slot => {
      const isBooked = bookedSlots.some(booked => booked.doctor === doctor && booked.date === date && booked.time === slot);
      const slotElement = $(`
        <div class="time-slot ${isBooked ? 'booked' : 'available'}" data-time="${slot}">
          ${slot}
        </div>
      `);

      if (!isBooked) {
        slotElement.on('click', function() {
          $('.time-slot.selected').removeClass('selected');
          $(this).addClass('selected');
        });
      }

      timeSlotsContainer.append(slotElement);
    });

    timeSlotsContainer.hide().fadeIn(500);
  }

  $('#doctor, #date').on('change', function() {
    const doctor = $('#doctor').val();
    const date = $('#date').val();
    renderTimeSlots(doctor, date);
  });

  $('#appointmentForm').on('submit', function(event) {
    event.preventDefault();

    const doctor = $('#doctor').val();
    const date = $('#date').val();
    const selectedTime = $('.time-slot.selected').data('time');

    if (!doctor || !date || !selectedTime) {
      alert('Please select a doctor, date, and time slot.');
      return;
    }
    bookedSlots.push({ doctor, date, time: selectedTime });
    alert(`Appointment booked with ${$('#doctor option:selected').text()} on ${date} at ${selectedTime}.`);

    renderTimeSlots(doctor, date);
  });

  renderTimeSlots('', '');
function validateForm() {
    const patient = new Patient(
        document.getElementById("name").value,
        document.getElementById("email").value,
        document.getElementById("message").value
    );

    console.log("Name:", patient.name);
    console.log("Email:", patient.email);
    console.log("Message:", patient.message);

    return false;  
}
function openDoctorSearch() {
    let newWin = window.open('', '_blank', 'width=800,height=600');
    
    if (!newWin) {
        alert('Popup blocked! Please allow popups for this site.');
        return;
    }
    
    newWin.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Doctor Search</title>
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                .doctor-card { border: 1px solid #ddd; padding: 10px; margin: 5px; border-radius: 5px; }
                .search-container { margin-bottom: 20px; }
            </style>
        </head>
        <body>
            <h2>Find a Doctor</h2>
            <div class="search-container">
                <input type="text" id="searchDoc" placeholder="Search by last name" />
                <select id="specialization">
                    <option value="">All Specializations</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="neurology">Neurology</option>
                    <option value="cardiology">Cardiology</option>
                </select>
                <button id="btn1">Search</button>
            </div>
            <div class="doctor-list"></div>
            <script>
                const doctors = [
                    { id: 1, firstName: "John", lastName: "Doe", specialization: "orthopedics" },
                    { id: 2, firstName: "Jane", lastName: "Smith", specialization: "neurology" },
                    { id: 3, firstName: "Michael", lastName: "Johnson", specialization: "cardiology" },
                    { id: 4, firstName: "Emily", lastName: "Brown", specialization: "orthopedics" },
                    { id: 5, firstName: "David", lastName: "Wilson", specialization: "neurology" },
                    { id: 6, firstName: "Sarah", lastName: "Davis", specialization: "cardiology" }
                ];

                function renderDoctors(filteredDoctors) {
                    const doctorList = $('.doctor-list');
                    doctorList.empty(); 

                    if (filteredDoctors.length === 0) {
                        doctorList.append('<p class="text-center">No doctors found.</p>');
                        return;
                    }

                    filteredDoctors.forEach(doctor => {
                        const card = 
                            <div class="doctor-card">
                                <h5>Dr. ${doctors.firstName} ${doctors.lastName}</h5>
                                <p><strong>Specialization:</strong> ${doctors.specialization}</p>
                            </div>
                        ;
                        doctorList.append(card);
                    });
                }

                function filterDoctors() {
                    const searchQuery = $('#searchDoc').val().toLowerCase().trim();
                    const specialization = $('#specialization').val();

                    let filteredDoctors = doctors.filter(doctor => {
                        const matchesSearch = doctor.lastName.toLowerCase().includes(searchQuery);
                        const matchesSpecialization = !specialization || doctor.specialization === specialization;
                        return matchesSearch && matchesSpecialization;
                    });

                    $('.doctor-card').fadeOut(300, function() {
                        renderDoctors(filteredDoctors);
                        $('.doctor-card').hide().fadeIn(300);
                    });
                }

                $(document).ready(function() {
                    $('#searchDoc').on('input', filterDoctors);
                    $('#specialization').on('change', filterDoctors);
                    $('#btn1').on('click', function(event) {
                        event.preventDefault();
                        filterDoctors();
                    });
                    renderDoctors(doctors);
                });
            </script>
        </body>
        </html>
    `);
    newWin.document.close();
}

// Open a new window
var newWin = window.open('', 'example', 'width=600,height=400');
function d() {
  let newWin = window.open('', '_blank','width=600,height=400'); // Open a new blank window

  if (!newWin) {
    alert('Popup blocked! Please allow popups for this site.');
    return;
  }

  // Add HTML structure to the new window
  newWin.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Calories Burned Calculator</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
      <style>
        .progress { height: 30px; margin-top: 20px; }
        .progress-bar { line-height: 30px; }
      </style>
    </head>
    <body>
      <div class="container">
        <h2 class="text-center mb-4">Calories Burned Calculator</h2>
        <form id="caloriesForm">
          <div class="mb-3">
            <label for="distance" class="form-label">Distance Walked (in kilometers)</label>
            <input type="number" class="form-control" id="distance" placeholder="Enter distance walked" required>
          </div>
          <div class="mb-3">
            <label for="food" class="form-label">Food Consumed</label>
            <select class="form-control" id="food" required>
              <option value="">-- Select Food --</option>
              <option value="burger">Burger (300 calories)</option>
              <option value="pizza">Pizza (500 calories)</option>
              <option value="vegetables">Vegetables (100 calories)</option>
              <option value="chocolate">Chocolate (200 calories)</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary w-100">Calculate</button>
        </form>
        <div id="results" class="mt-4">
          <p id="caloriesBurned"></p>
          <p id="walkingRequired"></p>
          <div class="progress">
            <div id="progressBar" class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
          </div>
        </div>
      </div>
      <script>
        const FOOD_CALORIES = {
          burger: 300,
          pizza: 500,
          vegetables: 100,
          chocolate: 200
        };
        const CALORIES_PER_KM = 70;

        document.getElementById('caloriesForm').addEventListener('submit', function(event) {
          event.preventDefault();

          const distance = parseFloat(document.getElementById('distance').value);
          const food = document.getElementById('food').value;

          if (!distance || !food) {
            alert('Please fill in all fields.');
            return;
          }

          const caloriesBurned = distance * CALORIES_PER_KM;
          const caloriesConsumed = FOOD_CALORIES[food];
          const additionalWalkingRequired = (caloriesConsumed / CALORIES_PER_KM).toFixed(2);

          document.getElementById('caloriesBurned').textContent = \`Calories burned from walking: \${caloriesBurned} kcal\`;
          document.getElementById('walkingRequired').textContent = \`Additional walking required to burn \${caloriesConsumed} kcal: \${additionalWalkingRequired} km\`;

          const progressPercentage = Math.min((caloriesBurned / caloriesConsumed) * 100, 100);
          const progressBar = document.getElementById('progressBar');
          progressBar.style.width = \`\${progressPercentage}%\`;
          progressBar.textContent = \`\${Math.round(progressPercentage)}%\`;
          progressBar.setAttribute('aria-valuenow', progressPercentage);

          document.getElementById('caloriesForm').reset();
        });
      </script>
    </body>
    </html>
  `);

  newWin.document.close(); // Ensure content is rendered properly
}
function c() {
  let newWin = window.open('', '_blank','width=600,height=400'); // Open a new blank window

  if (!newWin) {
    alert('Popup blocked! Please allow popups for this site.');
    return;
  }

  // Add HTML structure to the new window
  newWin.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Calories Burned Calculator</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
      <style>
        .progress { height: 30px; margin-top: 20px; }
        .progress-bar { line-height: 30px; }
      </style>
    </head>
    <body>
      <div class="container">
        <h2 class="text-center mb-4">Calories Burned Calculator</h2>
        <form id="caloriesForm">
          <div class="mb-3">
            <label for="distance" class="form-label">Distance Walked (in kilometers)</label>
            <input type="number" class="form-control" id="distance" placeholder="Enter distance walked" required>
          </div>
          <div class="mb-3">
            <label for="food" class="form-label">Food Consumed</label>
            <select class="form-control" id="food" required>
              <option value="">-- Select Food --</option>
              <option value="burger">Burger (300 calories)</option>
              <option value="pizza">Pizza (500 calories)</option>
              <option value="vegetables">Vegetables (100 calories)</option>
              <option value="chocolate">Chocolate (200 calories)</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary w-100">Calculate</button>
        </form>
        <div id="results" class="mt-4">
          <p id="caloriesBurned"></p>
          <p id="walkingRequired"></p>
          <div class="progress">
            <div id="progressBar" class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
          </div>
        </div>
      </div>
      <script>
        const FOOD_CALORIES = {
          burger: 300,
          pizza: 500,
          vegetables: 100,
          chocolate: 200
        };
        const CALORIES_PER_KM = 70;

        document.getElementById('caloriesForm').addEventListener('submit', function(event) {
          event.preventDefault();

          const distance = parseFloat(document.getElementById('distance').value);
          const food = document.getElementById('food').value;

          if (!distance || !food) {
            alert('Please fill in all fields.');
            return;
          }

          const caloriesBurned = distance * CALORIES_PER_KM;
          const caloriesConsumed = FOOD_CALORIES[food];
          const additionalWalkingRequired = (caloriesConsumed / CALORIES_PER_KM).toFixed(2);

          document.getElementById('caloriesBurned').textContent = \`Calories burned from walking: \${caloriesBurned} kcal\`;
          document.getElementById('walkingRequired').textContent = \`Additional walking required to burn \${caloriesConsumed} kcal: \${additionalWalkingRequired} km\`;

          const progressPercentage = Math.min((caloriesBurned / caloriesConsumed) * 100, 100);
          const progressBar = document.getElementById('progressBar');
          progressBar.style.width = \`\${progressPercentage}%\`;
          progressBar.textContent = \`\${Math.round(progressPercentage)}%\`;
          progressBar.setAttribute('aria-valuenow', progressPercentage);

          document.getElementById('caloriesForm').reset();
        });
      </script>
    </body>
    </html>
  `);

  newWin.document.close(); // Ensure content is rendered properly
}
const CALORIES_PER_KM = 70;
function openSymptomChecker() {
  let newWin = window.open('', '_blank', 'width=600,height=400');

  if (!newWin) {
      alert('Popup blocked! Please allow popups for this site.');
      return;
  }

  newWin.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Symptom Checker</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
          <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
          <style>
              body { padding: 20px; }
              .result-box { display: none; margin-top: 20px; padding: 10px; border: 1px solid #ccc; }
          </style>
      </head>
      <body>
          <div class="container">
              <h2 class="text-center mb-4">Symptom Checker</h2>
              <form id="symptomForm">
                  <div class="mb-3">
                      <label for="fever" class="form-label">Do you have a fever?</label>
                      <select class="form-control" id="fever" required>
                          <option value="">-- Select --</option>
                          <option value="high">High</option>
                          <option value="mild">Mild</option>
                          <option value="no">No</option>
                      </select>
                  </div>
                  <div class="mb-3">
                      <label for="cough" class="form-label">Do you have a cough?</label>
                      <select class="form-control" id="cough" required>
                          <option value="">-- Select --</option>
                          <option value="dry">Dry Cough</option>
                          <option value="wet">Wet Cough</option>
                          <option value="no">No</option>
                      </select>
                  </div>
                  <div class="mb-3">
                      <label for="fatigue" class="form-label">Are you feeling fatigued?</label>
                      <select class="form-control" id="fatigue" required>
                          <option value="">-- Select --</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                      </select>
                  </div>
                  <button type="button" id="checkSymptoms" class="btn btn-primary w-100">Check Symptoms</button>
              </form>
              <div id="resultBox" class="result-box"></div>
          </div>

          <script>
              $(document).ready(function() {
                  $('#checkSymptoms').click(function() {
                      let fever = $('#fever').val();
                      let cough = $('#cough').val();
                      let fatigue = $('#fatigue').val();
                      let resultText = "";

                      if (fever === 'high' && cough === 'dry' && fatigue === 'yes') {
                          resultText = "You may have symptoms of flu or COVID-19. Please consult a doctor.";
                      } else if (fever === 'mild' && cough === 'wet') {
                          resultText = "You might have a common cold. Stay hydrated and rest.";
                      } else if (fever === 'no' && cough === 'no' && fatigue === 'no') {
                          resultText = "You seem to be healthy! If you feel unwell, consult a doctor.";
                      } else {
                          resultText = "Your symptoms are unclear. If they persist, see a doctor.";
                      }

                      $('#resultBox').text(resultText).show();
                  });
              });
          </script>
      </body>
      </html>
  `);

  newWin.document.close(); // Ensure content is rendered properly
}

$(document).ready(function() {
    $('#checkSymptoms').click(function() {
        let fever = $('#fever').val();
        let cough = $('#cough').val();
        let fatigue = $('#fatigue').val();
        let resultText = "";

        if (fever === 'high' && cough === 'dry' && fatigue === 'yes') {
            resultText = "You may have symptoms of flu or COVID-19. Please consult a doctor.";
        } else if (fever === 'mild' && cough === 'wet') {
            resultText = "You might have a common cold. Stay hydrated and rest.";
        } else if (fever === 'no' && cough === 'no' && fatigue === 'no') {
            resultText = "You seem to be healthy! If you feel unwell, consult a doctor.";
        } else {
            resultText = "Your symptoms are unclear. If they persist, see a doctor.";
        }

        $('#resultBox').text(resultText).show();
    });
});
$(document).ready(function() {
    $('#checkSymptoms').click(function() {
        let fever = $('#fever').val();
        let cough = $('#cough').val();
        let fatigue = $('#fatigue').val();
        let resultText = "";

        if (fever === 'high' && cough === 'dry' && fatigue === 'yes') {
            resultText = "You may have symptoms of flu or COVID-19. Please consult a doctor.";
        } else if (fever === 'mild' && cough === 'wet') {
            resultText = "You might have a common cold. Stay hydrated and rest.";
        } else if (fever === 'no' && cough === 'no' && fatigue === 'no') {
            resultText = "You seem to be healthy! If you feel unwell, consult a doctor.";
        } else {
            resultText = "Your symptoms are unclear. If they persist, see a doctor.";
        }

        $('#resultBox').text(resultText).show();
    });
});
// Sample class data
const classes = [
    { id: 1, type: "yoga", date: "2023-10-25", time: "10:00", instructor: "Jane Doe" },
    { id: 2, type: "pilates", date: "2023-10-25", time: "12:00", instructor: "John Smith" },
    { id: 3, type: "hiit", date: "2023-10-26", time: "14:00", instructor: "Emily Brown" },
    { id: 4, type: "yoga", date: "2023-10-27", time: "09:00", instructor: "Michael Johnson" }
  ];

  let bookedClasses = [];

  function renderClasses(classType, classDate) {
    const classList = $('#classList');
    classList.empty(); 

    if (!classType || !classDate) {
      classList.append('<p>Please select a class type and date.</p>');
      return;
    }

    const filteredClasses = classes.filter(cls => cls.type === classType && cls.date === classDate);

    if (filteredClasses.length === 0) {
      classList.append('<p>No classes available for the selected date.</p>');
      return;
    }

    filteredClasses.forEach(cls => {
      const isBooked = bookedClasses.some(booked => booked.id === cls.id);
      const card = $(`
        <div class="class-card ${isBooked ? 'booked' : ''}" data-id="${cls.id}">
          <h5>${cls.type.toUpperCase()} Class</h5>
          <p><strong>Time:</strong> ${cls.time}</p>
          <p><strong>Instructor:</strong> ${cls.instructor}</p>
          ${isBooked ? '<p class="text-success">Booked</p>' : '<button class="btn btn-primary btn-sm">Book Now</button>'}
        </div>
      `);

      if (!isBooked) {
        card.find('button').on('click', function() {
          bookedClasses.push(cls);
          renderClasses(classType, classDate);
          renderBookedClasses();
        });
      }

      classList.append(card);
    });
  }

  function renderBookedClasses() {
    const bookedClassesList = $('#bookedClasses');
    bookedClassesList.empty(); 

    if (bookedClasses.length === 0) {
      bookedClassesList.append('<li>No classes booked yet.</li>');
      return;
    }

    bookedClasses.forEach(cls => {
      const listItem = $(`
        <li>
          ${cls.type.toUpperCase()} Class on ${cls.date} at ${cls.time} with ${cls.instructor}
        </li>
      `);
      bookedClassesList.append(listItem);
    });
  }

  $('#classType, #classDate').on('change', function() {
    const classType = $('#classType').val();
    const classDate = $('#classDate').val();
    renderClasses(classType, classDate);
  });

  renderBookedClasses();
const FOOD_CALORIES = {
  burger: 300,
  pizza: 500,
  vegetables: 100,
  chocolate: 200
};
 function highlightDifferences() {
    $('tbody tr').hover(
      function() {
        $(this).find('td').addClass('highlight');
      },
      function() {
        $(this).find('td').removeClass('highlight');
      }
    );
  }

  function switchProgram(program) {
    $('.program-option').removeClass('active');
    $(`.program-option[data-program="${program}"]`).addClass('active');

    $('#comparisonTable tbody tr').hide().fadeIn(500);
  }

  $('.program-option').on('click', function() {
    const program = $(this).data('program');
    switchProgram(program);
  });

  highlightDifferences();
document.getElementById('caloriesForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const distance = parseFloat(document.getElementById('distance').value);
  const food = document.getElementById('food').value;

  if (!distance || !food) {
    alert('Please fill in all fields.');
    return;
  }

  const caloriesBurned = distance * CALORIES_PER_KM;

  const caloriesConsumed = FOOD_CALORIES[food];

  const additionalWalkingRequired = (caloriesConsumed / CALORIES_PER_KM).toFixed(2);

  document.getElementById('caloriesBurned').textContent = `Calories burned from walking: ${caloriesBurned} kcal`;
  document.getElementById('walkingRequired').textContent = `Additional walking required to burn ${caloriesConsumed} kcal: ${additionalWalkingRequired} km`;

  const progressPercentage = Math.min((caloriesBurned / caloriesConsumed) * 100, 100);
  const progressBar = document.getElementById('progressBar');
  progressBar.style.width = `${progressPercentage}%`;
  progressBar.textContent = `${Math.round(progressPercentage)}%`;
  progressBar.setAttribute('aria-valuenow', progressPercentage);
  document.getElementById('caloriesForm').reset();
});
class Patient
{
    constructor(id,name,email)
    {
        this.id=id;
        this.name=name;
        this.email=email;
    }
    name()
    {
        return this.name;
    }
    email()
    {
        return this.email;
    }
    id()
    {
        return this.id;
    }
}
const normalPrice = 1000; 
const vipPrice = 2000; 
const tips = 321.432;
function calculateCost() {
    try {
        event.preventDefault(); 

        let patients = new Set();
        let months = parseInt(document.getElementById("months").value);
        let status = document.getElementById("status").value;
        let id = Math.floor(Math.random() * 1000);
    
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value; 

        if(months>15 || months<0)
        {
            throw new Error("monts cant be like this");
        }
        let d = new Date();  
        let endTime = new Date(d.getTime() + 5 * 24 * 60 * 60 * 1000); 
        let totalCost = BigInt((status === "vip") ? months * vipPrice : months * normalPrice);
        let coffee = (tips * months).toFixed(2);
            let result = `this cost can be change and would work ${d.toDateString()} to ${endTime.toDateString()} ID: ${id}, Your total cost for ${months} month(s) as a ${status.toUpperCase()} member is: <strong>$${totalCost}</strong>. Also, tips: $${coffee}`;
        
        document.getElementById("result").innerHTML = result;

        let tableBody = document.getElementById("data-table-body");
        let newRow = tableBody.insertRow();
        newRow.insertCell(0).innerText = id;
        newRow.insertCell(1).innerText = months;
        newRow.insertCell(2).innerText = status.toUpperCase();
        newRow.insertCell(3).innerText = `$${totalCost}`;

        let patient = new Patient(id, name, email);
        patients.add(patient);

        for (const value of patients) {
            console.log(`Patient ID: ${value.id}, Name: ${value.name}, Email: ${value.email}`);
        }

        document.forms["myForm"].reset();
        return false;

    } catch (error) {
        console.error("An error occurred:", error.message);
        alert("Error: " + error.message);
        return false;
    }
}
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();
  
    let nameRegex = /^[a-zA-Z\s]+$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let phoneRegex = /^\+?[0-9]{10,15}$/; 
    let messageRegex = /^.{10,}$/; 
  
    if (!nameRegex.test(name)) {
      alert("Please enter normal name");
      return false;
    }
    if (!emailRegex.test(email)) {
      alert("Please enter a working eml");
      return false;
    }
    if (!phoneRegex.test(phone)) {
      alert("Please enter phone number wthat wouldn have phone");
      return false;
    }
    if (!messageRegex.test(message)) {
      alert("Message must be at least 15.");
      return false;
    }
  
    alert("Form submitted successfully!");
    return true;
  }
function getFullName(doctor) {
    return `${doctor.name} - ${doctor.speciality}`;
}
  const doctorsByDisease = {
    "spid": [
        { name: 'Dr. Alex', speciality: 'Infectologist' },
        { name: 'Dr. Maria', speciality: 'Immunologist' }
    ],
    "cancer": [
        { name: 'Dr. Robert', speciality: 'Oncologist' },
        { name: 'Dr. Sarah', speciality: 'Radiologist' }
    ],
    "diabet": [
        { name: 'Dr. John', speciality: 'Endocrinologist' },
        { name: 'Dr. Emily', speciality: 'Diabetologist' }
    ]
};
var loadImage = function() {
    var selectElement = document.getElementById('sicks'); 
    var image = document.getElementById('sickImage');  
    switch (selectElement.value) {
        case "spid":
            image.src = "spid.jpg";
            list.innerHTML = doctorsByDisease[selectElement.value]
            .map(getFullName)
            .map(name => `<li>${name}</li>`)
            .join('');
            break;
        case "cancer":
            image.src = "cancer.jpg";
            list.innerHTML = doctorsByDisease[selectElement.value]
            .map(getFullName)
            .map(name => `<li>${name}</li>`)
            .join('');
            break;
        case "diabet":
            image.src = "diabet.jpg"; 
            list.innerHTML = doctorsByDisease[selectElement.value]
            .map(getFullName)
            .map(name => `<li>${name}</li>`)
            .join('');
            break;
        default:
            image.src = ""; 
    }
};
let data = [
    {ID: 1, ProductName: "Beds" },
    {ID: 2, ProductName: "Chairs" },
    {ID: 3, ProductName: "Sofas"},
    {ID: 4, ProductName: "Dining Tables" },
    {ID: 5, ProductName: "TV stoves" }
  ];

  $("#dropdownlist").kendoDropDownList({
    dataTextField:"ProductName",
    dataValueField:"ID",
    height: "400px",
    dataSource: data,
    filter:"contains"
  });
$(document).ready(function(){

    $('#btn1').kendoDropDownList({
        dataTextField:"ProductName",
        dataValueField:"ID",
        height: "400px",
        dataSource: data,
        filter:"contains"
    });
});

