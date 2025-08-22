const langs = ['uz', 'ru', 'en']
let currentLangIndex = 0

const translations = {
  uz: {
    langLabel: "O’zbek",
    offerLink: "Offerta imzolash ⎋",
    welcomeText: "Spacega xush kelibsiz",
    studentBtn: "O’quvchiman",
    parentBtn: "Ota-onaman",
    usernamePlaceholder: "Modme Id yoki telefon raqam",
    passwordPlaceholder: "Parol",
    loginBtn: "Tasdiqlash",
    qrBtn: "QR code orqali kirish",
    emptyError: "❌ Iltimos, barcha maydonlarni to'ldiring!",
    success: "✅ Muvaffaqiyatli tizimga kirdingiz!",
    error: "❌ Noto'g'ri login yoki parol!"
  },
  ru: {
    langLabel: "Русский",
    offerLink: "Подписать оферту ⎋",
    welcomeText: "Добро пожаловать в Space",
    studentBtn: "Я ученик",
    parentBtn: "Я родитель",
    usernamePlaceholder: "Modme ID или номер телефона",
    passwordPlaceholder: "Пароль",
    loginBtn: "Подтвердить",
    qrBtn: "Войти через QR код",
    emptyError: "❌ Пожалуйста, заполните все поля!",
    success: "✅ Вы успешно вошли в систему!",
    error: "❌ Неверный логин или пароль!"
  },
  en: {
    langLabel: "English",
    offerLink: "Sign the offer ⎋",
    welcomeText: "Welcome to Space",
    studentBtn: "I am a student",
    parentBtn: "I am a parent",
    usernamePlaceholder: "Modme ID or Phone number",
    passwordPlaceholder: "Password",
    loginBtn: "Confirm",
    qrBtn: "Login via QR code",
    emptyError: "❌ Please fill in all fields!",
    success: "✅ Successfully logged in!",
    error: "❌ Invalid login or password!"
  }
}

const langBtn = document.getElementById("langBtn")
const langLabel = document.getElementById("langLabel")
const offerLink = document.getElementById("offerLink")
const welcomeText = document.getElementById("welcomeText")
const studentBtn = document.getElementById("studentBtn")
const parentBtn = document.getElementById("parentBtn")
const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")
const loginBtn = document.getElementById("loginBtn")
const qrBtn = document.getElementById("qrBtn")
const message = document.getElementById("message")

const togglePassword = document.querySelector(".toggle-password")
const qrPopup = document.getElementById("qrPopup")
const qrOpenBtn = document.getElementById("qrBtn")
const qrCloseBtn = document.getElementById("closeQr")

let role = "student"

function applyTranslations(lang) {
  const t = translations[lang]
  langLabel.textContent = t.langLabel
  offerLink.textContent = t.offerLink
  welcomeText.textContent = t.welcomeText
  studentBtn.textContent = t.studentBtn
  parentBtn.textContent = t.parentBtn
  usernameInput.placeholder = t.usernamePlaceholder
  passwordInput.placeholder = t.passwordPlaceholder
  loginBtn.textContent = t.loginBtn
  qrBtn.textContent = t.qrBtn
}

langBtn.addEventListener("click", () => {
  currentLangIndex = (currentLangIndex + 1) % langs.length
  applyTranslations(langs[currentLangIndex])
})

studentBtn.addEventListener("click", () => {
  role = "student"
  studentBtn.classList.add("active")
  parentBtn.classList.remove("active")
})

parentBtn.addEventListener("click", () => {
  role = "parent"
  parentBtn.classList.add("active")
  studentBtn.classList.remove("active")
})

togglePassword.addEventListener("click", () => {
  passwordInput.type = passwordInput.type === "password" ? "text" : "password"
})

loginBtn.addEventListener("click", () => {
  const lang = langs[currentLangIndex]
  const t = translations[lang]
  const username = usernameInput.value.trim()
  const password = passwordInput.value.trim()

  if (username === "" || password === "") {
    message.style.color = "red"
    message.textContent = t.emptyError
    return
  }

  if ((username === "student" && password === "1234" && role === "student") ||
      (username === "parent" && password === "1234" && role === "parent")) {
    message.style.color = "green"
    message.textContent = t.success
  } else {
    message.style.color = "red"
    message.textContent = t.error
  }
})

qrOpenBtn.addEventListener("click", () => {
  qrPopup.style.display = "flex"
})

qrCloseBtn.addEventListener("click", () => {
  qrPopup.style.display = "none"
})

applyTranslations("uz")
