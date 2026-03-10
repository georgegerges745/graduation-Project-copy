// رسالة عند تحميل الصفحة
console.log("Doctor Dashboard Loaded");

// زر تعديل البروفايل
const editBtn = document.querySelector(".edit");

editBtn.addEventListener("click", () => {

alert("Edit Profile Feature Coming Soon!");

});


// الضغط على أي موعد
const appointments = document.querySelectorAll(".row");

appointments.forEach((row) => {

row.addEventListener("click", () => {

let name = row.querySelector("h4").innerText;

alert("Appointment with " + name);

});

});


// تغيير حالة الموعد عند الضغط على الحالة
const status = document.querySelectorAll(".status");

status.forEach((s) => {

s.addEventListener("click", (e) => {

e.stopPropagation();

if (s.classList.contains("pending")) {

s.classList.remove("pending");
s.classList.add("completed");
s.innerText = "Completed";

}

else if (s.classList.contains("completed")) {

s.classList.remove("completed");
s.classList.add("pending");
s.innerText = "Pending";

}

});

});


// تأثير عند المرور على الكروت
const cards = document.querySelectorAll(".box");

cards.forEach((card) => {

card.addEventListener("mouseover", () => {

card.style.transform = "scale(1.05)";
card.style.transition = "0.2s";

});

card.addEventListener("mouseout", () => {

card.style.transform = "scale(1)";

});

});


// عداد للمواعيد
let totalAppointments = document.querySelectorAll(".row").length;

console.log("Total Appointments:", totalAppointments);